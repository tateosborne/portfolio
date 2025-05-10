package main

import (
	// "fmt"
	"html/template"
	// "log"
	"net/http"
)

// define template struct
var tmpl *template.Template

func homeHandler(w http.ResponseWriter, r *http.Request) {
	tmpl.ExecuteTemplate(w, "home.html", nil) // third param is for any data into template
}

func main() {
	// router, ie mux
	router := http.NewServeMux()

	// html template
	tmpl, _ = template.ParseGlob("./templates/*.html")

	// handler funcs
	router.HandleFunc("/", homeHandler)

	// server
	server := http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	// run server
	server.ListenAndServe()
}
