package main

// User →  Server listens →  Mux finds correct handler →  Handler sends HTML/CSS/images →  User

import (
	"fmt"
	"net/http"
)



