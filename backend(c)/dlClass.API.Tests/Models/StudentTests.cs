using Xunit;
using dlClass.API.Models;

namespace dlClass.API.Tests;

public class StudentTests
{
    [Fact]
    public void CheckTypes()
    {
        // Create student object, 
        var student = new Student();
        
        Assert.IsType<String>(student.First_Name);
        Assert.IsType<String>(student.Last_Name);
        Assert.IsType<int>(student.Id);
        Assert.IsType<DateTime>(student.DOB);
    }
}
