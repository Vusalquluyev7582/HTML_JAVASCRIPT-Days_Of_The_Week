let yeniSətir = "\r\n";

let mətn = "1-Bazar ertəsi" + yeniSətir
    + "2-Çərşənbə axşamı" + yeniSətir
    + "3-Çərşənbə" + yeniSətir
    + "4-Cümə axşamı" + yeniSətir
    + "5-Cümə" + yeniSətir
    + "6-Şənbə" + yeniSətir
    + "7-Bazar" + yeniSətir
    + "Zəhmət olmasa bir seçim edin";

let dəyər = prompt(mətn);

switch (dəyər) {
    case "1":
        alert("Bazar ertəsi")
        console.log("Bazar ertəsi");
        break;

    case "2":
        alert("Çərşənbə axşamı")
        console.log("Çərşənbə axşamı");
        break;

    case "3":
        alert("Çərşənbə")
        console.log("Çərşənbə");
        break;

    case "4":
        alert("Cümə axşamı")
        console.log("Cümə axşamı");
        break;

    case "5":
        alert("Cümə")
        console.log("Cümə");
        break;

    case "6":
        alert("Şənbə")
        console.log("Şənbə");
        break;

    case "7":
        alert("Bazar")
        console.log("Bazar");
        break;

    default:
        alert("Zəhmət olmasa düzgün bir dəyər daxil edin!")
        console.log("Zəhmət olmasa düzgün bir dəyər daxil edin!");
}