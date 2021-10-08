using System.Collections.Generic;
using Entities.DTOs;

namespace Business.Abstract
{
    public interface ICurrencyService
    {
        List<string> GetUsd(CurrencyDto interval);
        List<string> GetEuro(CurrencyDto interval);
        List<string> GetTry(CurrencyDto interval);
    }
}