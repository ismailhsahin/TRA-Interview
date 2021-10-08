using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Context;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NameController : ControllerBase
    {
        private IUserService _userService;
        private readonly DBContext db;

        public NameController(DBContext context, IUserService userService)
        {
            db = context;
            _userService = userService;
        }

        // GET: api/Name
        [HttpGet("salla")]
        public IActionResult Get()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }


        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest userCred)
        {
            var token = _userService.Authenticate(userCred);

            if (token == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(token);
        }
        [HttpPost("add")]
        public IActionResult Add(User user)
        {
            _userService.Add(user);
            
            return Ok();
            
        }
    }
}
