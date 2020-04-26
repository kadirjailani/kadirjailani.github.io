document.addEventListener("DOMContentLoaded", function () {
    console.log('Your document is ready!');

    const test1 = document.getElementById("test1");
    const test2 = document.getElementById("test2");
    const test3 = document.getElementById("test3");
    const test4 = document.getElementById("test4");
    const test5 = document.getElementById("test5");
    const test6 = document.getElementById("test6");
    const group2 = document.getElementById("group2");
    const group3 = document.getElementById("group3");

    test1.classList.add('animated', 'fadeInLeft');


    setTimeout(() => {
        test2.classList.add('animated', 'fadeInRight');
    }, 250);

    setTimeout(() => {
        test3.classList.add('animated', 'fadeIn');
    }, 500);

    setTimeout(() => {
        test4.classList.add('animated', 'fadeIn');
    }, 600);

    setTimeout(() => {
        test5.classList.add('animated', 'fadeIn');
    }, 650);

    window.onscroll = function () {
        // Get the header
        // const topNavi = document.getElementById("topNavi");

        // const sticky = topNavi.offsetTop;
        const pagePosition = window.pageYOffset;
        // console.log(sticky, pagePosition);

        // setTimeout(() => {
        //     if (pagePosition > 80) {
        //         topNavi.classList.add("sticky");
        //     } else {
        //         topNavi.classList.remove("sticky");
        //     }
        // }, 250);


        if(pagePosition > 150) {
            test6.classList.add('animated', 'fadeIn');
            setTimeout(() => {
                group2.classList.add('animated', 'fadeInRight')
            }, 250);

            setTimeout(() => {
                group3.classList.add('animated', 'fadeInRight')
            }, 300);
            
        }
    };
});