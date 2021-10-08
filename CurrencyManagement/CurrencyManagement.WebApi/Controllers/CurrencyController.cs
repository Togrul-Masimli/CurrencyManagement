using Business.Abstract;
using Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace CurrencyManagement.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CurrencyController : ControllerBase
    {
        private readonly ICurrencyService _currencyService;

        public CurrencyController(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        [HttpGet("usd")]
        public IActionResult GetUsd([FromQuery] CurrencyDto interval)
        {
            var currencies = _currencyService.GetUsd(interval);
            return Ok(currencies);
        }

        [HttpGet("try")]
        public IActionResult GetTry([FromQuery] CurrencyDto interval)
        {
            var currencies = _currencyService.GetTry(interval);
            return Ok(currencies);
        }

        [HttpGet("euro")]
        public IActionResult GetEuro([FromQuery] CurrencyDto interval)
        {
            var currencies = _currencyService.GetEuro(interval);
            return Ok(currencies);
        }
    }
}