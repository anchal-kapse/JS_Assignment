
        // Table
        function Table() {
            let num = prompt("Enter Number")
            for (let i = 1; i <= 10; i++) {
                var j = i * num
                console.log(num, '*', i, '=', j)
            }
        }
        // User
        function ShowInput() {
            let user = prompt("Hello")
            console.log("Hello", user)
        }

        // Even-odd
        function Printevenodd() {
            let input = prompt("Enter Number")
            if (input % 2 == 0) {
                console.log("Even Number")
            } else {
                console.log("Odd Number")
            }
        }

        // Prime_Number
        function Prime_Number() {
            let x, i
            let count = 0

            x = prompt("Enter Number")
            for (i = 1; i <= x; i++) {

                if ((x % i) == 0) {
                    count++;
                }
            }

            if (count < 3) {
                console.log(x," is a prime number.");
            }

            else {
                console.log(x,"is not a prime number.");
            }
        }
