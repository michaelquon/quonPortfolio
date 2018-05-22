using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Contact.ViewModel
{
    public class ContactViewModel
    {
        [Required(ErrorMessage= "Name is required")]
        [MinLength(3, ErrorMessage= "Name must be 3 or more characters")]
        public string Name { get; set; }
        [Required(ErrorMessage= "Email Address is required")]
        [EmailAddress]
        public string Email { get; set; }
        [Required(ErrorMessage= "Subject is required")]
        public string Subject {get; set; }
        [Required(ErrorMessage="Message is required")]
        public string Message { get; set; }
    }
}