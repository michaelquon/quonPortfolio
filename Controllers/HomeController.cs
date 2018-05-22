using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using folio.Models;
using Contact.ViewModel;
using System.Net.Mail;
using System.Net;

namespace folio.Controllers {
    public class HomeController: Controller {
        [HttpGet]
        [Route("")]
        public IActionResult Index() {
            return View();
        }

        [HttpPost]
        public IActionResult Index(ContactViewModel vm) {
            if (ModelState.IsValid) {
                try {
                    var body = "Email From: {0} At: {1} Message: {2}";
                    MailMessage msz = new MailMessage();
                    msz.From = new MailAddress("mquon@outlook.com"); 
                    msz.To.Add("mquon@outlook.com");
                    msz.Subject = vm.Subject;
                    msz.Body = string.Format(body, vm.Name, vm.Email, vm.Message);
                    SmtpClient smtp = new SmtpClient();

                    smtp.Host = "smtp-mail.outlook.com";
                    smtp.Port = 587;
                    smtp.Credentials = new System.Net.NetworkCredential("mquon@outlook.com", "june132014");
                    smtp.EnableSsl = true;
                    smtp.Send(msz);

                    ModelState.Clear();
                    ViewBag.Message = "Thank you for Contacting me. I check my mail regularly and will be in contact soon. -MQ";
                } catch (Exception ex) {
                    ModelState.Clear();
                    ViewBag.Message = $" Sorry we are facing Problem here {ex.Message}";
                }
                return View("Index");
            }
            else{
                return View("Index");
            }
        }
    
        [HttpGet]
        [Route("Sent")]

        public IActionResult Sent(){
            return View ();
        }
       
    }
}