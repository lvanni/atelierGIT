function start_demo() {
	
	a = get_value("#var1");
	b = get_value("#var2");
	
	op = get_value("#op");
	
	if (op == "+") {
		result = addition(a,b);
		set_value("#demo_button", a + op + b + " = " + result);
	} else {
		set_value("#demo_button", "je ne sais pas encore faire ça...");
	}
}
	
