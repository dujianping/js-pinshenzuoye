$(function () {
    let time=document.querySelector("#time");
    let profit=document.querySelector("#profit");
    let status=document.querySelector("#status");
    $("#time").change(function () {
        time.style.backgroundPositionX=-16+"px";
        time.style.backgroundPositionY=-6+"px";
    });
    $("#profit").change(function () {
        profit.style.backgroundPositionX=-16+"px";
        profit.style.backgroundPositionY=-6+"px";
    });
    $("#status").change(function () {
        status.style.backgroundPositionX=-16+"px";
        status.style.backgroundPositionY=-6+"px";
    })
});