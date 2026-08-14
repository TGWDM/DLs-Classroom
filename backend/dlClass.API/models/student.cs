using System.ComponentModel.DataAnnotations;

namespace dlClass.API.Models;

// Table for student data in db
public class Student
{
    public int Id {get; set;} 
    public string First_Name {get; set;} = string.Empty;
    public string Last_Name {get; set;} = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    [Required]
    public DateTime DOB {get; set;}
}