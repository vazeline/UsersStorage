using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ChallengeWebApi
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                   name: "reactApp",
                   url: "react/{*pathInfo}",
                   defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
               );

            routes.LowercaseUrls = true;
        }
    }
}
