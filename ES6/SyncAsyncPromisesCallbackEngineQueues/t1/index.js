const firstFunction = () => {
    console.log("The execution of the first function has started.");
    setTimeout(
        () => {
            console.log("The execution of the first function has stopped.");

            setTimeout(
                () => {
                    console.log("The execution of the second function has started.");
                    console.log("The execution of the second function has stopped.");

                    setTimeout(
                        () => {
                            console.log("The execution of the third function has started.");
                            setTimeout(
                                () => {
                                    console.log("The execution of the third function has ended.");

                                    setTimeout(
                                        () => {
                                            console.log("The execution of the fourth function has started.");
                                            console.log("The execution of the fourth function has stopped.");
                                        },
                                        0
                                    );
                                },
                                3000
                            );
                        },
                        0
                    );
                },
                0
            );
        },
        2000
    );
}

firstFunction();

/*
firstFunction();const firstFunction = () => {
    console.log("The execution of the first function has started.");

    setTimeout(
        () => {
            console.log("The execution of the first function has stopped.");
        },
        2000
    );
}

const secondFunction = () => {
    console.log("The execution of the second function has started.");
    console.log("The execution of the second function has stopped.");
}

firstFunction();
secondFunction();
*/