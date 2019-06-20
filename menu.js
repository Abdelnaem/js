
      (function () {

        var scroll_Top = 0, header, header_page, menu_links;

        window.addEventListener("scroll", function (e) {

          header = document.querySelector(".logo-search-menu");

          header_page = document.querySelector("#header");

          menu_links = document.querySelector(".menu-links");

          if (window.scrollY > scroll_Top && window.scrollY >= 70) {

            header_page.classList.add("active");

          } else {

            header_page.classList.remove("active");

          }

          scroll_Top = window.scrollY;

        });

      })();



      (function () {

        var menu_icon = document.querySelector(".show-menu"),

            menu_icon_i = document.querySelector(".show-menu i"),

            menu_links = document.querySelector(".menu-links"),

            search_icon = document.querySelector(".show-search"),

            search_icon_i = document.querySelector(".show-search i"),

            search_content = document.querySelector(".search"),

            search_input = search_content.querySelector("input");

        menu_icon.onclick = function () {

          if (search_content.classList.contains("active")) {

            search_content.classList.remove("active");

            search_icon_i.classList.remove("fa-close");

          }

          if (menu_links.classList.contains("active")) {

            menu_links.classList.remove("active");

            menu_icon_i.classList.remove("fa-close");

          } else {

            menu_links.classList.add("active");

            menu_icon_i.classList.add("fa-close");

          }

        }

        search_icon.onclick = function () {

          if (menu_links.classList.contains("active")) {

            menu_links.classList.remove("active");

            menu_icon_i.classList.remove("fa-close");

          }

          if (search_content.classList.contains("active")) {

            search_content.classList.remove("active");

            search_icon_i.classList.remove("fa-close");

          } else {

            search_content.classList.add("active");

            search_icon_i.classList.add("fa-close");

            search_input.focus();

          }

        }

      })();
