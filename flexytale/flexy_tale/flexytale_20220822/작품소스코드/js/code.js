$("#cong").hide();
    
    
    
    //flexytale설명 팝업//
    $(".btn_flex-end").click(function(){
        $("#DD").css("right", "0px");
        $(".btn_flex-end").css('display', 'none');
        $(".btn_close").css("display","inline-block");
        $("#example-arrow").css("animation-iteration-count", "0");
    });
    $(".btn_close").click(function(){
        $("#popup").hide();
        $(".popup_black").hide();
    });
//코드 치기//
    function addLineNumbers() {
        const LineNumbers = document.getElementById('add-numbers');
        LineNumbers.innerHTML += numbers +'<br>';
        return -1;
    }
    function countChildElement() {
        const ele = document.getElementById('add-numbers');
        let eleCount = ele.childElementCount;
        return eleCount;
    }

//slide 버튼//
    $('#next-button').click(function(){
        document.getElementById("BlockBtn").style.display = "none";
        document.getElementById("NoneBtn").style.display = "block";
    });

    $('#next-button2').click(function(){
        document.getElementById("BlockBtn").style.display = "block";
        document.getElementById("NoneBtn").style.display = "none";
    });

//main//
    $('#code').focus();
    let numbers = 6;

    $("#code").on("change keyup paste", function() {
        let height =document.getElementById('code').offsetHeight;
        let textarea = document.getElementById('code').value;
        if (window.event.keyCode == 13)
        {
            addLineNumbers();
            numbers = 6 + countChildElement();
            console.log(textarea);
            console.log(numbers);
            document.getElementById("code").style.height = height + 24 +'px';
        }
    });
    

    //만들어야할 클래스
    //동작 제대로 되는지 확인
    //flex-wrap이랑 잘 호환되는지 확인
    //flex-direction-row {flex-direction: row;}
    //flex-direction-column {flex-direction: column;}
    //flex-direction-column-reverse {flex-direction: column-reverse;}
    //justify-content-center {justify-content: center;}
    //justify-content-flex-start {justify-content: flex-start;}
    //justify-content-flex-end {justify-content: flex-end;}
    //align-items-center {justify-content: center;}
    //align-items-flex-start {align-items: flex-start;}
    //align-items-flex-end {align-items: flex-end;}

    //level//
    let textarea = document.getElementById('code').value;
    $("#code").on("propertychange change keyup paste input", function() {
        
        let currentVal = $(this).val();

        //flex-direction
        //flex-direction: row-reverse;
        if((currentVal.includes('flex-direction: row-reverse;'))&&(!document.querySelector('.pond').classList.contains('flex-direction-row-reverse')))
        {
            document.getElementById('pond').className += ' flex-direction-row-reverse';
        }
        //지우면 삭제
        if((!currentVal.includes('flex-direction: row-reverse;'))&&(document.querySelector('.pond').classList.contains('flex-direction-row-reverse')))
        {
            document.getElementById('pond').classList.remove('flex-direction-row-reverse');
        }

        //flex-direction: row;
        if((currentVal.includes('flex-direction: row;'))&&(!document.querySelector('.pond').classList.contains('flex-direction-row')))
        {
            document.getElementById('pond').className += ' flex-direction-row';
        }
        
        if((!currentVal.includes('flex-direction: row;'))&&(document.querySelector('.pond').classList.contains('flex-direction-row')))
        {
            document.getElementById('pond').classList.remove('flex-direction-row');
        }

        //flex-direction: column;
        if((currentVal.includes('flex-direction: column;'))&&(!document.querySelector('.pond').classList.contains('flex-direction-column')))
        {
            document.getElementById('pond').className += ' flex-direction-column';
        }
        
        if((!currentVal.includes('flex-direction: column;'))&&(document.querySelector('.pond').classList.contains('flex-direction-column')))
        {
            document.getElementById('pond').classList.remove('flex-direction-column');
        }
        //flex-direction: column-reverse;
        if((currentVal.includes('flex-direction: column-reverse;'))&&(!document.querySelector('.pond').classList.contains('flex-direction-column-reverse')))
        {
            document.getElementById('pond').className += ' flex-direction-column-reverse';
        }
        
        if((!currentVal.includes('flex-direction: column-reverse;'))&&(document.querySelector('.pond').classList.contains('flex-direction-column-reverse')))
        {
            document.getElementById('pond').classList.remove('flex-direction-column-reverse');
        }


        //justify-content
        //justify-content: center;
        if((currentVal.includes('justify-content: center;'))&&(!document.querySelector('.pond').classList.contains('justify-content-center')))
        {
            document.getElementById('pond').className += ' justify-content-center';
        }
        
        if((!currentVal.includes('justify-content: center;'))&&(document.querySelector('.pond').classList.contains('justify-content-center')))
        {
            document.getElementById('pond').classList.remove('justify-content-center');
        }

        //justify-content: flex-start;
        if((currentVal.includes('justify-content: flex-start;'))&&(!document.querySelector('.pond').classList.contains('justify-content-flex-start')))
        {
            document.getElementById('pond').className += ' justify-content-flex-start';
        }
        
        if((!currentVal.includes('justify-content: flex-start;'))&&(document.querySelector('.pond').classList.contains('justify-content-flex-start')))
        {
            document.getElementById('pond').classList.remove('justify-content-flex-start');
        }

        //justify-content: flex-end;
        if((currentVal.includes('justify-content: flex-end;'))&&(!document.querySelector('.pond').classList.contains('justify-content-flex-end')))
        {
            document.getElementById('pond').className += ' justify-content-flex-end';
        }
        
        if((!currentVal.includes('justify-content: flex-end;'))&&(document.querySelector('.pond').classList.contains('justify-content-flex-end')))
        {
            document.getElementById('pond').classList.remove('justify-content-flex-end');
        }

        //justify-content: space-between;
         if((currentVal.includes('justify-content: space-between;'))&&(!document.querySelector('.pond').classList.contains('justify-content-space-between')))
         {
             document.getElementById('pond').className += ' justify-content-space-between';
         }
         
         if((!currentVal.includes('justify-content: space-between;'))&&(document.querySelector('.pond').classList.contains('justify-content-space-between')))
         {
             document.getElementById('pond').classList.remove('justify-content-space-between');
         }

        //justify-content: space-around;
        if((currentVal.includes('justify-content: space-around;'))&&(!document.querySelector('.pond').classList.contains('justify-content-space-around')))
        {
            document.getElementById('pond').className += ' justify-content-space-around';
        }
        
        if((!currentVal.includes('justify-content: space-around;'))&&(document.querySelector('.pond').classList.contains('justify-content-space-around')))
        {
            document.getElementById('pond').classList.remove('justify-content-space-around');
        }

        //justify-content: space-evenly;
        if((currentVal.includes('justify-content: space-evenly;'))&&(!document.querySelector('.pond').classList.contains('justify-content-space-evenly')))
        {
            document.getElementById('pond').className += ' justify-content-space-evenly';
        }
        
        if((!currentVal.includes('justify-content: space-evenly;'))&&(document.querySelector('.pond').classList.contains('justify-content-space-evenly')))
        {
            document.getElementById('pond').classList.remove('justify-content-space-evenly');
        }


        //align-items
        //align-items: flex-start;
        if((currentVal.includes('align-items: flex-start;'))&&(!document.querySelector('.pond').classList.contains('align-items-flex-start')))
        {
            document.getElementById('pond').className += ' align-items-flex-start';
        }
        
        if((!currentVal.includes('align-items: flex-start;'))&&(document.querySelector('.pond').classList.contains('align-items-flex-start')))
        {
            document.getElementById('pond').classList.remove('align-items-flex-start');
        }

        //align-items: flex-end;
        if((currentVal.includes('align-items: flex-end;'))&&(!document.querySelector('.pond').classList.contains('align-items-flex-end')))
        {
            document.getElementById('pond').className += ' align-items-flex-end';
        }
        
        if((!currentVal.includes('align-items: flex-end;'))&&(document.querySelector('.pond').classList.contains('align-items-flex-end')))
        {
            document.getElementById('pond').classList.remove('align-items-flex-end');
        }

        //align-items: center;
        if((currentVal.includes('align-items: center;'))&&(!document.querySelector('.pond').classList.contains('align-items-center')))
        {
            document.getElementById('pond').className += ' align-items-center';
        }
        
        if((!currentVal.includes('align-items: center;'))&&(document.querySelector('.pond').classList.contains('align-items-center')))
        {
            document.getElementById('pond').classList.remove('align-items-center');
        }

        //nextButton
        cl=document.querySelector('.pond').classList

        //first
        if (cl.contains('justify-content-center')) {
            $("#first-link").prop('href', 'secondlevel.html');};

        //second
        if (cl.contains('flex-direction-column-reverse')) {
            $("#second-link").prop('href', 'thirdlevel.html');};

        //third
        if (cl.contains('flex-direction-column')&&cl.contains('justify-content-flex-end')) {
            $("#third-link").prop('href', 'fourthlevel.html');};

        //fourth
        if (cl.contains('flex-direction-row-reverse')&&cl.contains('justify-content-space-around')) {
            $("#fourth-link").prop('href', 'fifthlevel.html');};

        //fifth
        if (cl.contains('align-items-center')&&cl.contains('justify-content-space-evenly')&&cl.contains('flex-direction-column-reverse')) {
        $("#fif-link").prop('href', 'sixlevel.html');};
        //sixth
        
    });

document.getElementById("next").onclick = function (){
    if (cl.contains('align-items-center')&&cl.contains('flex-direction-column-reverse')) {
        $("#cong").show();
    }
};


//Button


//just-btn
//center
document.getElementById("center").onclick = function (){
    let text = $('#code').val();
    let content = text + "justify-content: center;";
    let textarea_str = $("#code").val(content);

    
};
//flex-end
document.getElementById("flex-end").onclick = function (){
    let text = $('#code').val();
    let content = text + "justify-content: flex-end;";
    let textarea_str = $("#code").val(content);

};

//flex-start
document.getElementById("flex-start").onclick = function () {
    let text = $('#code').val();
    let content = text + "justify-content: flex-start;";
    let textarea_str = $("#code").val(content);

};

//just-btn2

//space-between
document.getElementById("space-between").onclick = function () {
    let text = $('#code').val();
    let content = text + "justify-content: space-between;";
    let textarea_str = $("#code").val(content);

};
//space-around
document.getElementById("space-around").onclick = function () {
    let text = $('#code').val();
    let content = text + "justify-content: space-around;";
    let textarea_str = $("#code").val(content);

};

//space-evenly
document.getElementById("space-evenly").onclick = function () {
    let text = $('#code').val();
    let content = text + "justify-content: space-evenly;";
    let textarea_str = $("#code").val(content);

};
//flexD-btn

//row
document.getElementById("row").onclick = function () {
    let text = $('#code').val();
    let content = text + "flex-direction: row;";
    let textarea_str = $("#code").val(content);

};
//row-reverse
document.getElementById("row-reverse").onclick = function () {
    let text = $('#code').val();
    let content = text + "flex-direction: row-reverse;";
    let textarea_str = $("#code").val(content);

};

//column
document.getElementById("column").onclick = function () {
    let text = $('#code').val();
    let content = text + "flex-direction: column;";
    let textarea_str = $("#code").val(content);

};
//flexD-btn2

//column
document.getElementById("column-reverse").onclick = function () {
    let text = $('#code').val();
    let content = text + "flex-direction: column-reverse;";
    let textarea_str = $("#code").val(content);

};
//align-btn

//center
document.getElementById("center2").onclick = function () {
    let text = $('#code').val();
    let content = text + "align-items: center;";
    let textarea_str = $("#code").val(content);

};
//flex-end
document.getElementById("flex-end2").onclick = function () {
    let text = $('#code').val();
    let content = text + "align-items: flex-end;";
    let textarea_str = $("#code").val(content);

};

//flex-start
document.getElementById("flex-start2").onclick = function () {
    let text = $('#code').val();
    let content = text + "align-items: flex-start;";
    let textarea_str = $("#code").val(content);

};

//Button 넘기기

$("#just-btn2").hide();
$("#flexD-btn").hide();
$("#flexD-btn2").hide();
$("#align-btn").hide();
$("#1B").click(function(){
    $("#just-btn").show();
    $("#just-btn2").hide();
    $("#flexD-btn").hide();
    $("#flexD-btn2").hide();
    $("#align-btn").hide();
});
$("#2B").click(function(){
    $("#just-btn2").show();
    $("#just-btn").hide();
    $("#flexD-btn").hide();
    $("#flexD-btn2").hide();
    $("#align-btn").hide();
});
$("#3B").click(function(){
    $("#flexD-btn").show();
    $("#just-btn2").hide();
    $("#just-btn").hide();
    $("#flexD-btn2").hide();
    $("#align-btn").hide();
});
$("#4B").click(function(){
    $("#flexD-btn2").show();
    $("#just-btn2").hide();
    $("#just-btn").hide();
    $("#flexD-btn").hide();
    $("#align-btn").hide();
});
$("#5B").click(function(){
    $("#align-btn").show();
    $("#just-btn2").hide();
    $("#just-btn").hide();
    $("#flexD-btn").hide();
    $("#flexD-btn2").hide();
});
