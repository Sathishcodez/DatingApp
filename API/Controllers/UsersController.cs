using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sqlite;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController(DataContext context) : BaseApiController
{

    [HttpGet]
    public ActionResult<IEnumerable<AppUser>> GetUsers()
    {
        var users = context.Users.ToList();
        return users;
    }
    [HttpGet("{id}")]
    public ActionResult<AppUser> GetUsers(int id)
    {
        var user = context.Users.Find(id);
        return user;
    }

}
