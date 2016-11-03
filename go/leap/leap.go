package leap

// testVersion should match the targetTestVersion in the test file.
const testVersion = 2

// IsLeapYear returns true if the given year is a leap year, otherwise returns false.
func IsLeapYear(year int) bool {
	if year%4 == 0 {
		if year%100 == 0 && year%400 == 0 {
			return true
		}
		if year%100 == 0 {
			return false
		}
		return true
	}
	return false
}
