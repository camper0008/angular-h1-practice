package main

import (
	"fmt"
	"h1-backend/db_api"
)

func main() {
	fmt.Println("connecting to db...")
	db := db_api.Connect()
	fmt.Println("done!")

	db.Close()
}
