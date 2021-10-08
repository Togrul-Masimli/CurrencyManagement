using System;
using System.Collections.Generic;
using System.Xml;
using Business.Abstract;
using Entities.DTOs;

namespace Business.Concrete
{
    public class CurrencyManager : ICurrencyService
    {
        public List<string> GetUsd(CurrencyDto interval)
        {
            var currencies = GetCurrencies(interval.StartDate, interval.EndDate, "USD");
            return currencies;
        }

        public List<string> GetEuro(CurrencyDto interval)
        {
            var currencies = GetCurrencies(interval.StartDate, interval.EndDate, "EUR");
            return currencies;
        }

        public List<string> GetTry(CurrencyDto interval)
        {
            var currencies = GetCurrencies(interval.StartDate, interval.EndDate, "TRY");
            return currencies;
        }

        public List<string> GetCurrencies(DateTime from, DateTime thru, string currencyCode)
        {
            List<string> currencies = new List<string>();
            
            for (var day = from.Date; day.Date <= thru.Date; day = day.AddDays(1))
            {
                var formatedDay = day.ToString("dd/MM/yyyy").Replace('/', '.');
                string url = $"https://www.cbar.az/currencies/{formatedDay}.xml";
                var xmldoc = new XmlDocument();
                xmldoc.Load(url);

                string currency = xmldoc
                    .SelectSingleNode($"ValCurs/ValType [@Type='Xarici valyutalar']/Valute [@Code='{currencyCode}']/Value").InnerXml;

                currencies.Add(currency);
            }

            return currencies;
        }
    }
}