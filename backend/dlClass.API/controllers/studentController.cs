using dlClass.API.Data;      
using dlClass.API.Models;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;  
using Microsoft.EntityFrameworkCore;

namespace dlClass.API.Controllers;
[ApiController]
[Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
public class StudentController : ControllerBase{
    private readonly AppDbContext _context;
    public StudentController(AppDbContext context)
    {
        _context = context;
    }
     // Endpoint for getting all of the student in the student table as a list.
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
    {
        return await _context.Students.ToListAsync();
    }

    // Get a single student
    [HttpGet("{id}")]
    public async Task<ActionResult<Student>> GetStudent(int id)
    {
        var student = await _context.Students.FindAsync(id);
        if (student == null)
            return NotFound();
        return student;
    }
    // Create a student 
    [HttpPost]
    public async Task<ActionResult<Student>> CreateStudent(Student student)
 {
        _context.Students.Add(student);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetStudent), new { id = student.Id }, student);
    }

    // Update a student
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateStudent(int id, Student student)
    {
        if (id != student.Id)
            return BadRequest();

        _context.Entry(student).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    // Delete a student
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStudent(int id)
    {
        var student = await _context.Students.FindAsync(id);
        if (student == null)
            return NotFound();

        _context.Students.Remove(student);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
