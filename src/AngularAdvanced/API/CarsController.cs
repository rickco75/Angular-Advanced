using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularAdvanced.Services;
using AngularAdvanced.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularAdvanced.API
{
    [Route("api/[controller]")]
    public class CarsController : Controller
    {
        private CarService _carService;

        public CarsController(CarService carService)
        {
            _carService = carService;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return _carService.ListCars();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Car Get(int id)
        {
            return _carService.FindCar(id);
        }

    }
}
