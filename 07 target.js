$(function(){
    $('.tab-btn a').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
})