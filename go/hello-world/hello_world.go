package hello

const testVersion = 2

// HelloWorld greets the user.
// If the user does not supply an argument, it returns "Hello, World!"
// If the user supplies an argument, it returns "Hello, <arg>!"
func HelloWorld(name string) string {
	if name == "" {
		return "Hello, World!"
	}

	return "Hello, " + name + "!"
}
