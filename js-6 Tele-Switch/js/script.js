
let selection = Number(prompt("Press 1 for English\nPress 2 for Hindi\nPress 3 for Gujarati"));

switch (selection) {

    case 1:
        let select1 = Number(prompt("Press 1 For internet recharge \nPress 2 For top up recharge \nPress 3 for spacial recharge"));

        switch (select1) {
            case 1:
                alert("You have successfully done internet recharge")
                break;

            case 2:
                alert("You have successfully done top up recharge")
                break;

            case 3:
                alert("You have successfully done spacial recharge")
                break;

            default:
                alert("wrong choice")
        }
        break;

    case 2:
        let select2 = Number(prompt("इंटरनेट रिचार्ज के लिए 1 दबाये \nटॉप अप रिचार्ज के लिए 2 दबाये \nस्पेशल रिचार्ज के लिए 3 दबाये"))

        switch (select2) {
            case 1:
                alert("आपका सफलता पूर्वक इंटरनेट रिचार्ज हो गया है ।")
                break;

            case 2:
                alert("आपका सफलता पूर्वक टॉप अप रिचार्ज हो गया है ।")
                break;

            case 3:
                alert("आपका सफलता पूर्वक  स्पेशियल रिचार्ज हो गया है ।")
                break;

            default:
                alert("wrong choice")
        }
        break;

    case 3:
        let select3 = Number(prompt("Internet Recharge mate 1 dabaiye \nTop Up Recharge mate 2 dabaiye \nspacial recharge mate 3 dabaiye"))

        switch (select3) {
            case 1:
                alert("Tame Kariyu internet recharge")
                break;

            case 2:
                alert("Tame Kariyu top up recharge")
                break;

            case 3:
                alert("Tame Kariyu spacial recharge")
                break;

            default:
                alert("wrong choice")
        }
        break;
}