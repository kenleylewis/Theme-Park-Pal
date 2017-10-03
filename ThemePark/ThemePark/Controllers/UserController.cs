using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc; //lets us know we can use restful services
using ThemePark.Model;


namespace ThemePark.Controllers
{
	[Route("api/[controller]")]
	public class UserController : Controller
	{

		private readonly Model.UserContext _context; //private property use underscore
		public UserController(Model.UserContext context)
        {
			_context = context;

            if (_context.User.Count()==0)
            {
				
				User a = new User();
				a.Name = "Kenley";
				a.UserName = "Kenny";
				a.Password = "Lewis";
                a.Park = "Disneyland";
                a.Gender = "Female";
				a.Age = 23;
				a.City = "San Clemente";
				a.MobileNumber = "3334445555";
				a.Email = "kenley@gmail.com";
				_context.User.Add(a);
				_context.SaveChanges();

				User b = new User();
				b.Name = "Tyler";
				b.UserName = "TyTy";
				b.Password = "Lewis";
                b.Park = "Universal";
				b.Gender = "Female";
				b.Age = 25;
				b.City = "Charleston";
				b.MobileNumber = "5557776666";
				b.Email = "tyler@gmail.com";
				_context.User.Add(b);
				_context.SaveChanges();

				User c = new User();
				c.Name = "Jerri";
				c.UserName = "Jh0liday";
				c.Password = "Ho";
                c.Park = "Disneyland";
				c.Gender = "Female";
				c.Age = 25;
				c.City = "Fountain Valley";
				c.MobileNumber = "1115558888";
				c.Email = "jerri@gmail.com";
				_context.User.Add(c);
				_context.SaveChanges();
            }
               
		}

		// GET api/values
		[HttpGet]
		public List<Model.User> Get()
		{
            
			return _context.User.ToList();
		}

		// GET api/books/5
		[HttpGet("{id}")]
		public Model.User Get(int id)
		{
			foreach (Model.User hotdog in _context.User)
			{
				if (hotdog.Id == id)
				{
					return hotdog;
				}
			}

			return null; //have to return something in this case so return null in future it will be a status code
		}

		// POST api/values
		[HttpPost] //create
		public void Post([FromBody]Model.User value) 
		{
            Console.Write(value);
			_context.User.Add(value);
			_context.SaveChanges();
		}

		// PUT api/values/5
		[HttpPut("{id}")] //update
		public void Put(int id, [FromBody]Model.User value)
		{
			_context.User.Remove(_context.User.First(user => user.Id == id));
			_context.SaveChanges();
			_context.User.Add(value);
			_context.SaveChanges();
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
			foreach (Model.User hotdog in _context.User)
			{
				if (hotdog.Id == id)
				{
					_context.User.Remove(hotdog);
					_context.SaveChanges();
				}
			}
		}
	}
}
