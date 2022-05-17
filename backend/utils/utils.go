package utils

func LogError(err error) {
	if err != nil {
		panic(err)
	}
}
