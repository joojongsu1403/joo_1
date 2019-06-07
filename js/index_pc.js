$(document).ready(function () {
    

    var ww = $(window).width();
    var wh = $(window).height();
    
    /*$('#wrap').css('zoom','127%');*/  
        
    $(window).resize(function(){
        var ww = $(window).width(); 
        
        if( ww >= 2439 ){
            $('#wrap').css('zoom','125%');
            $('body>img').css({
               width: 100+'%',
                height: 100+'%'
            });
        } else if ( ww >= 1920 ) {
            $('#wrap').css('zoom','100%');
            $('body>img').css({
               width: 'auto',
                height: 'auto'
            });
        } else if ( ww >= 1599 ) {
            $('#wrap').css('zoom','84%');
        } else if ( ww >= 1365) {
            $('#wrap').css('zoom','71%');
        } else if ( ww >= 1279 ) {
            $('#wrap').css('zoom','66%');
        }
    }).resize();
    
    
    
    /*header 파트*/
    //메뉴 박스 클릭 이벤트
    var one = false;
    $('#out_x_box').click(function () {
        if (!one) {
            $('.x_box:nth-child(2)').stop().animate({
                width: 0
            }, 100);
            $('.x_box:nth-child(1),.x_box:nth-child(3)').stop().animate({
                top: 10 + 'px'
            });
            $('header').stop().animate({
                width: 100 + '%'
            }, 800, function () {
                $('#header_top>div').stop().animate({
                    width: 200 + 'px'
                }, 400);
                $('#header_bot>div').stop().animate({
                    width: 200 + 'px'
                }, 400, function () {
                    $('#header_bot>p,#header_top>p').stop().animate({
                        opacity: 1
                    }, 200);
                    $('#header_top>div').stop().animate({
                        left: 200 + 'px'
                    }, 300);
                    $('#header_bot>div').stop().animate({
                        left: 200 + 'px'
                    }, 300, function () {
                        $('#header_bot>div,#header_top>div').css({
                            width: 0,
                            left: 0
                        });
                        $('.header_mid_title:nth-child(1)>.line_box').stop().animate({
                            top: 0
                        });
                        $('.header_mid_title:nth-child(1)>.text_box').stop().animate({
                            top: -10 + 'px'
                        });
                        $('.header_mid_title:nth-child(2)>.line_box').stop().animate({
                            top: 0
                        }, 400);
                        $('.header_mid_title:nth-child(2)>.text_box').stop().animate({
                            top: -10 + 'px'
                        }, 400);
                        $('.header_mid_title:nth-child(3)>.line_box').stop().animate({
                            top: 0
                        }, 600);
                        $('.header_mid_title:nth-child(3)>.text_box').stop().animate({
                            top: -10 + 'px'
                        }, 600);
                        $('.header_mid_title:nth-child(4)>.line_box').stop().animate({
                            top: 0
                        }, 800);
                        $('.header_mid_title:nth-child(4)>.text_box').stop().animate({
                            top: -10 + 'px'
                        }, 800, function () {
                            $('#header_mid_guard').css({
                                display: 'none'
                            });
                        });
                    });
                });
            });
            $('header>p').stop().animate({
                opacity: 0
            });
            setTimeout(function () {
                $('.x_box:nth-child(1)').stop().animate({
                    rotate: '45deg'
                }, 300);
                $('.x_box:nth-child(3)').stop().animate({
                    rotate: '-45deg'
                }, 300);
            }, 500);

            $('#section_all').stop().animate({
                opacity: 0
            }, 700);
            one = true;


        } else if (one) {
            $('.x_box:nth-child(1),.x_box:nth-child(3)').stop().animate({
                rotate: '0deg'
            });
            $('#header_mid_guard').css({
                display: 'block'
            });
            $('.header_mid_title>.line_box').stop().animate({
                top: 46 + 'px'
            }, 400);
            $('.header_mid_title>.text_box').stop().animate({
                top: 56 + 'px'
            }, 400);
            $('#header_top>div').stop().animate({
                width: 200 + 'px'
            }, 400);
            $('#header_bot>div').stop().animate({
                width: 200 + 'px'
            }, 400, function () {
                $('#header_bot>p,#header_top>p').css({
                    opacity: 0
                }, 200);
                $('#header_top>div').stop().animate({
                    left: 200 + 'px'
                }, 300);
                $('#header_bot>div').stop().animate({
                    left: 200 + 'px'
                }, 300, function () {
                    $('header>p').stop().animate({
                        opacity: 1
                    });
                    $('header').stop().animate({
                        width: 60 + 'px'
                    }, 600);
                    $('#header_bot>div,#header_top>div').css({
                        width: 0,
                        left: 0
                    });

                });
            });

            $('#section_all').stop().animate({
                opacity: 1
            }, 1500);
            setTimeout(function () {
                $('.x_box:nth-child(2)').stop().animate({
                    width: 30 + 'px'
                }, 100);
                $('.x_box:nth-child(1)').stop().animate({
                    top: 0
                });
                $('.x_box:nth-child(3)').stop().animate({
                    top: 17 + 'px'
                })
            }, 500);
            one = false;
        }
    });


    //메뉴 타이틀 마우스 클릭 이벤트 ------------------------------------------------
    $('.header_mid_title').click(function () {
        $('.x_box:nth-child(1),.x_box:nth-child(3)').stop().animate({
            rotate: '0deg'
        });
        $('#header_mid_guard').css({
            display: 'block'
        });
        $('#header_top>div').stop().animate({
            width: 200 + 'px'
        }, 400);
        $('#header_bot>div').stop().animate({
            width: 200 + 'px'
        }, 400, function () {
            $('.line_box>div', this).stop().animate({
                top: 46 + 'px'
            }, 300);
            $('.text_box', this).animate({
                color: '#eeeeee'
            }, 300);
            $('.header_mid_title>.line_box').animate({
                top: 46 + 'px'
            }, 400);
            $('.header_mid_title>.text_box').animate({
                top: 56 + 'px'
            }, 400);
            $('#header_bot>p,#header_top>p').css({
                opacity: 0
            }, 200);
            $('#header_top>div').stop().animate({
                left: 200 + 'px'
            }, 300);
            $('#header_bot>div').stop().animate({
                left: 200 + 'px'
            }, 300, function () {
                $('header').stop().animate({
                    width: 60 + 'px'
                }, 600);
                $('header>p').stop().animate({
                    opacity: 1
                });
                $('#header_bot>div,#header_top>div').css({
                    width: 0,
                    left: 0
                });

            });
        });
        
        $('#section_all').stop().animate({
            opacity: 1
        }, 1500);
        setTimeout(function () {
            $('.x_box:nth-child(2)').stop().animate({
                width: 30 + 'px'
            }, 100);
            $('.x_box:nth-child(1)').stop().animate({
                top: 0
            });
            $('.x_box:nth-child(3)').stop().animate({
                top: 17 + 'px'
            })
        }, 500);
        one = false;
    });


    //메뉴 타이틀 마우스 이벤트 ----------------------------------------------------
    $('.header_mid_title').mouseenter(function () {
        $('.line_box>div', this).stop().animate({
            top: 0
        }, 300);
        $('.text_box', this).stop().animate({
            color: '#929aab'
        });
    }).mouseleave(function () {
        $('.line_box>div', this).stop().animate({
            top: 46 + 'px'
        }, 300);
        $('.text_box', this).stop().animate({
            color: '#eeeeee'
        }, 300);
    });


    /*header 파트 끝 -------------------------------------------------------------*/

    //page_1 파트, animate 파트 start ----------------------------------------------
    setTimeout(function () {
        $('#event_box_first').stop().animate({
            height: 0

        }, 500);
        setTimeout(function () {
            $('#event_box_last').stop().animate({
                height: 0
            }, 500);

        }, 200);

        setTimeout(function () {
            $('#opening').stop().animate({
                width: 0,
                opacity: 0
            }, 600);
        }, 1600);

        setTimeout(function () {
            $('header').stop().animate({
                width: 60 + 'px'
            }, 500);
            $('#page_2').stop().animate({
                opacity: 1
            }, 1000);
        }, 2100);

        setTimeout(function () {
            $('header>p,#out_x_box').stop().animate({
                opacity: 1
            }, 500);
        }, 2500);

        setTimeout(function () {
            $('#bg_box>img:nth-child(2)').stop().animate({
                opacity: 1
            }, 1000);
            $('#page_1').stop().animate({
                display: 'none'
            }, 100);
        }, 2600);

        setTimeout(function () {
            $('#title_box').stop().animate({
                width: 480 + 'px'
            }, 300);
        }, 2900);

        setTimeout(function () {
            $('#title_box>div').stop().animate({
                left: 490 + 'px'
            }, 300);
        }, 3250);
    }, 1500);

    //page_1 파트 end --------------------------------------------------------------



    //page_3 타이틀 실행문 -----------------------------------------------------------
    $('.header_mid_title:nth-child(1)>.text_box').click(function () {
       
        page_3_reset();
        work_reset();

        $('#page_3').css({
            display: 'block'
        });
        $('.logo_box').css({
            display: 'block'
        });
        $('.work_box').css({
            width: 50 + '%'
        });
        $('#page_3>.work_box').delay(2600).animate({
            top: 0
        }, 1000);

        $('#page_4,#p4_base,#page_5,#page_6').css({
            display: 'none'
        });
        $('#page_1,#page_2').stop().fadeOut(500);


    });

    //page_4 타이틀 실행문 -----------------------------------------------------------
    $('.header_mid_title:nth-child(2)>.text_box').click(function () {
        
        skill_reset();
        $('#p4_skill_text_guard').css({
           display:'block' 
        });
        $('#p4_skill_sim_but').css({
           opacity:0 
        });
        $('#p4_base').fadeOut(100);
        $('#page_4').css({
            display: 'block'
        });
        $('.logo_box').css({
            display: 'block'
        });
        $('#p4_base').delay(2200).fadeIn(500, function () {
            $('#p4_skill_text>li').stop().animate({
                opacity: 1,
                top: 0
            },function(){
                $('#p4_skill_text_guard').fadeOut(500);
            });
            $('#p4_skill_box').stop().animate({
                opacity: 1
            }, function () {
                $('#p4_skill_sim_but').stop().animate({
                   opacity: 1 
                });
                $('#p4_skill_box>li>div').stop().animate({
                    top: 190 + 'px'
                });
            });
        });
        $('#p4_skill_sim_but>li').text('SIMPLE');
        $('#page_3,#page_5,#page_6').css({
            display: 'none'
        });
        $('#page_1,#page_2').stop().fadeOut(500);
    });

    //page_5 타이틀 실행문 -----------------------------------------------------------
    $('.header_mid_title:nth-child(3)>.text_box').click(function () {
        
        about_reset();

        $('#page_5').css({
            display: 'block'
        });
        $('.logo_box').css({
            display: 'block'
        });
        $('#p5_base').scrollTop(0);
        $('#p5_base').delay(2200).fadeIn(500, function () {
            $('.p5_sec:nth-child(1)>img').stop().animate({
                opacity: 1,
                top: 0
            }, function () {
                $('#title_text').stop().fadeIn(500, function () {
                    $('#p5_right_text_1>li').stop().fadeIn(500);
                    $('#p5_right_text_1>div>div').stop().animate({
                        left: 0
                    }, function () {
                        $('#p5_right_text_1>div>div').stop().animate({
                            left: 500 + 'px'
                        }, function () {
                            $(this).css({
                                left: -500 + 'px'
                            });
                        });

                        $('#p5_right_text_1>div>ul').stop().fadeIn(500);
                    });
                });
            });

        });


        $('#page_3,#page_4,#p4_base,#page_6').css({
            display: 'none'
        });
        $('#page_1,#page_2').stop().fadeOut(500);
    });

    
    
    
    //page_6 타이틀 실행문 -----------------------------------------------------------
    
    $('.header_mid_title:nth-child(4)>.text_box').click(function(){
        
        contact_reset();
        
        $('#page_6').css({
           display:'block' 
        });
        
        $('.logo_box').css({
            display:'none'
        });
        
        $('#page_6>div:nth-child(1)>ul:nth-child(1)>p').delay(2500).fadeOut(300);
        
        $('#page_6>div:nth-child(1)').stop().delay(2500).animate({
            width: 752+'px',
            height: 422+'px',
            top: 402+'px',
            left: 548+'px'
        },500,function(){
            
            $('#page_6>div:nth-child(1)>ul:nth-child(1)>li').stop().delay(200).animate({
               opacity: 0,
                top: 55+'%'
            },function(){
                $('#page_6>div:nth-child(1)>ul:nth-child(2)').stop().animate({
                    opacity: 1
                },function(){
                    $(this).stop().delay(200).animate({
                        width: 900+'px',
                        height: 900+'px',
                    },function(){
                        $('#page_6>div:nth-child(1)>ul:nth-child(3)>li').stop().delay(200).animate({
                           opacity:1 
                        });
                    });
                });
                
            });
        });
        $('#page_6>div:nth-child(1)>ul:nth-child(1)>img').stop().delay(2500).animate({
            opacity: 0 
        });
        
        
        $('#page_3,#page_4,#p4_base,#page_5').css({
            display: 'none'
        });
        $('#page_1,#page_2').stop().fadeOut(500);
    });

    
    //각 페이지 초기화----------------------------------------------------------------
    
    //p3 리셋문
    function work_reset() {
        $('#page_3>#ad_box').stop().css({
            top: 1080 + 'px'
        });
        $('#page_3>#web_box').stop().css({
            top: -1080 + 'px'
        });
        $('#page_3').css({
            display: 'none'
        });
    }
    //p4 리셋문
    function skill_reset() {
        $('#p4_skill_text>li').stop().animate({
            opacity: 0,
            top: 36 + 'px'
        }, 100);
        $('#p4_skill_box').stop().animate({
            opacity: 0
        }, function () {
            $('#p4_skill_box>li>div').css({
                top: 200 + 'px'
            });
        });
        simple_reset();
    }
    //p5 리셋문
    function about_reset() {
        $('#p5_base').css({
            display: 'none'
        });
        $('#title_text').css({
            display: 'none'
        });
        $('#p5_right_text_1>li').css({
            display: 'none'
        });
        $('#p5_right_text_1>div>ul').css({
            display: 'none'
        });
        $('.p5_sec:nth-child(1)>img').css({
            opacity: 0,
            top: -50 + 'px'
        });
        $('#p5_base').scrollTop(0, 0);
        p5_scroll_reset();
    }

    //p6 리셋문
    function contact_reset(){
        $('#page_6>div:nth-child(1)').css({
            width: 100+'%',
            height: 100+'%',
            top: 0,
            left: 0 
        });
        $('#page_6>div:nth-child(1)>ul:nth-child(1)>li').css({
           top: 50+'%',
            opacity: 1
        });
        $('#page_6>div:nth-child(1)>ul:nth-child(2)').css({
            opacity: 0,
            width: 0,
            height: 0
        });
        $('#page_6>div:nth-child(1)>ul:nth-child(3)>li').css({
            opacity: 0
        });
        $('#page_6>div:nth-child(1)>ul:nth-child(1)>p').css({
            display: 'block'
        });
        $('#page_6>div:nth-child(1)>ul:nth-child(1)>img').css({
           opacity: 1 
        });
    }

    //각 페이지 초기화 end----------------------------------------------------------------
    
    
    

    /*page_3 ad 선택 박스--------------------------------------------------------------*/
    $('#ad_box').click(function () {
        $('#web_box').animate({
            width: 0
        });
        $(this).animate({
            width: 100 + '%'
        }, function () {
            $('.p3_x_box').stop().animate({
                width: 60 + 'px'
            });
            $('.p3_x_circle').stop().animate({
                opacity: 1
            }, function () {
                $('.p3_line_box:nth-child(1)').stop().animate({
                    rotate: 45 + 'deg'
                });
                $('.p3_line_box:nth-child(2)').stop().animate({
                    rotate: -45 + 'deg'
                });
                $('#ad_out_box').stop().fadeIn(800);
                $('#p3_ad_bg').stop().fadeIn(500);
            });
        });
        $('.work_title').delay(300).fadeOut(600);

    });

    /*page_3 web 선택 박스-------------------------------------------------------------------*/
    $('#web_box').click(function () {
        $(this).animate({
            width: 100 + '%'
        });
        $('#ad_box').animate({
            width: 0
        }, function () {
            $('.p3_x_box').stop().animate({
                width: 60 + 'px'
            });
            $('.p3_x_circle').stop().animate({
                opacity: 1
            }, function () {
                $('.p3_line_box:nth-child(1)').stop().animate({
                    rotate: 45 + 'deg'
                });
                $('.p3_line_box:nth-child(2)').stop().animate({
                    rotate: -45 + 'deg'
                });
                $('#p3_web_bg').stop().fadeIn(500);
                $('.web_select_in_box').css({
                    display: 'block'
                });
                $('.web_select_in_box:nth-child(1)').delay(500).animate({
                    marginTop: 0,
                    opacity: 1
                }, 500);
                $('.web_select_in_box:nth-child(2)').delay(800).animate({
                    marginTop: 0,
                    opacity: 1
                }, 500);
                $('.web_select_in_box:nth-child(3)').delay(1100).animate({
                    marginTop: 0,
                    opacity: 1
                }, 500);



            });
        });
        $('.work_title').delay(300).fadeOut(600);
        $('.p3_x_box').addClass('p3_x_box_c2');
        $('.p3_x_circle').addClass('p3_x_circle_c2');
        $('.p3_line_box').addClass('p3_line_box_c2');
    });

    /*page_3 취소 버튼--------------------------------------------------------------------*/
    $('.p3_x_circle').click(function () {

        $('.p3_line_box').stop().animate({
            rotate: 0
        }, function () {
            page_3_reset();
        });
    });

    function page_3_reset() {
        $('.p3_line_box').stop().animate({
            rotate: 0
        });
        $('.work_box').stop().animate({
            width: 50 + '%'
        }, function () {
            $('.p3_x_box').removeClass('p3_x_box_c2');
            $('.p3_x_circle').removeClass('p3_x_circle_c2');
            $('.p3_line_box').removeClass('p3_line_box_c2');
        });

        $('.p3_x_box').stop().animate({
            width: 0
        });
        $('.p3_x_circle').stop().animate({
            opacity: 0
        });
        $('.work_title').delay(300).fadeIn(500);


        $('.p3_bg').stop().fadeOut(500);
        $('#ad_out_box').stop().fadeOut(300);
        color_out();
        $('.ad_but_circle:nth-child(1)').addClass('but_color');
        $('#ad_photo_box').css({
            top: 0
        });
        $('.web_select_in_box').fadeOut(200, function () {
            $('.web_select_in_box').stop().animate({
                opacity: 0
            }, function () {
                $(this).css({
                    marginTop: 150 + 'px'
                });
            });
        });


        popdown_box();
        web_con_out();
    }



    /*page_3 선택화면 마우스 이벤트*/
    $('.work_box').mouseenter(function () {
        $('.work_title>p:nth-child(1)', this).stop().animate({
            top: -100 + 'px'
        });
        $('.work_title>p:nth-child(2)', this).stop().animate({
            opacity: 1
        }, 500);
    }).mouseleave(function () {
        $('.work_title>p:nth-child(1)', this).stop().animate({
            top: -40 + 'px'
        });
        $('.work_title>p:nth-child(2)', this).stop().animate({
            opacity: 0
        }, 500);
    });


    /*page_3 web----------------------------------------------------------------------*/

    $('.web_select_in_box').click(function () {
        $('.web_con_out_box').delay(100).animate({
            top: 0
        }, function () {
            $('.web_con_text>li>div').stop().animate({
                left: 0
            }, function () {
                $(this).stop().animate({
                    left: 472 + 'px'
                }, function () {
                    $(this).css({
                        left: -472 + 'px'
                    });
                });
                $('.web_con_text>li:nth-child(1)>img,.web_con_text>li:nth-child(2)>p,.web_con_text:nth-child(4)>li:first-child>h3').stop().animate({
                    opacity: 1
                });
            });
            $('.web_con_text>li:nth-child(3)').animate({
                left: 0
            }, function () {
                $('.web_con_text>li:nth-child(3)>a>p').animate({
                    opacity: 1
                },300);
            });
            $('.web_con_text_guard').fadeOut(800);
        });
    });




    $('.web_select_in_box').on('click', function () {
        var i = $(this).index();
        $('.web_con_photo>li').eq(i).delay(500).fadeIn(1000);
        $('.web_con_text').eq(i).fadeIn(500);
        $('#web_con_bg>li').eq(i).fadeIn(500);
    });




    $('.web_con_text>li:nth-child(3)').mouseenter(function () {
        $(this).stop().animate({
            backgroundColor: '#393e46'
        });
        $('.web_con_text>li:nth-child(3)>a>p').stop().animate({
            color: '#f7f7f7'
        });
    }).mouseleave(function () {
        $(this).stop().animate({
            backgroundColor: '#929aab'
        });
        $('.web_con_text>li:nth-child(3)>a>p').stop().animate({
            color: '#393e46'
        });
    })

    $('#web_con_close>img').click(function () {
        web_con_out();
    });





    function web_con_out() {
        $('.web_con_photo>li').fadeOut(500);
        $('.web_con_text').fadeOut(500);
        $('#web_con_bg>li').fadeOut(500);
        $('.web_con_text>li:nth-child(1)>img,.web_con_text>li:nth-child(2)>p,.web_con_text:nth-child(4)>li:first-child>h3').stop().animate({
            opacity: 0
        });
        $('.web_con_text>li:nth-child(3)').stop().animate({
            left: -350 + 'px'
        });
        $('.web_con_text_guard').css({
            display: 'block'
        });
        $('.web_con_text>li:nth-child(3)>a>p').stop().animate({
            opacity: 0
        });
        $('.web_con_out_box').stop().animate({
            top: 1080 + 'px'
        });
    }





    /*page_3 ad 스크롤 버튼----------------------------------------------------------------*/
    $('.ad_but_circle').click(function (e) {
        e.preventDefault();
        var ht = $('.in_photo_box').height();
        var i = $(this).index();
        var nowTop = -i * ht;

        $('#ad_photo_box').stop().animate({
            top: nowTop
        });
    });


    function color_out() {
        $('.ad_but_circle').removeClass('but_color');
    };

    $('.in_photo_box:nth-child(1)').mouseenter(function () {
        color_out();
        $('.ad_but_circle:nth-child(1)').addClass('but_color');
    });
    $('.in_photo_box:nth-child(2)').mouseenter(function () {
        color_out();
        $('.ad_but_circle:nth-child(2)').addClass('but_color');
    });
    $('.in_photo_box:nth-child(3)').mouseenter(function () {
        color_out();
        $('.ad_but_circle:nth-child(3)').addClass('but_color');
    });

    $('.ad_but_circle:nth-child(1)').click(function () {
        color_out();
        $(this).addClass('but_color');
    });
    $('.ad_but_circle:nth-child(2)').click(function () {
        color_out();
        $(this).addClass('but_color');
    });
    $('.ad_but_circle:nth-child(3)').click(function () {
        color_out();
        $(this).addClass('but_color');
    });


    var d = false;

    $('#ad_photo_box').on('mousewheel DOMMouseScroll', function (e) {
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) {
            delta = E.detail * -40;
        } else {
            delta = E.wheelDelta;
        };

        var a = parseInt($('#ad_photo_box').css("top"));
        var b = $('.in_photo_box').height();
        var c = $('.in_photo_box').length;

        if (delta < 0 && a > (c - 1) * -b && !d) {
            d = true;
            $('#ad_photo_box').stop().animate({
                "top": a += -b
            }, 400, function () {
                d = false;
            });
        } else if (delta > 0 && a < 0 && !d) {
            d = true;
            $('#ad_photo_box').stop().animate({
                "top": a += b
            }, 400, function () {
                d = false;
            });
        };



    });



    $('.photo_select', this).mouseenter(function () {
        $('.photo_shadow', this).stop().animate({
            opacity: 1
        }, 300);
    }).mouseleave(function () {
        $('.photo_shadow').stop().animate({
            opacity: 0
        }, 300);
    });


    function popup_box() {
        $('#ad_pop_box').stop().fadeIn(300);
        $('#pop_title_box').delay(200).animate({
            width: 550 + 'px'
        });
    };

    function popdown_box() {
        $('#pop_title_box>li').css({
            display: 'none'
        });
        $('#ad_pop_box,#center_photo_box>ul').stop().fadeOut(300);
        $('#pop_title_box').stop().animate({
            width: 0
        })
        $('#center_photo_box>ul').css({
            left: 0
        });
        cl_i = 0;
    };


    $('.in_photo_box:nth-child(1)>.photo_select').on('click', function () {
        var i = $(this).index();
        popup_box();
        $('#pop_title_box>li').eq(i).delay(600).fadeIn(500);
        $('#center_photo_box>ul').eq(i).fadeIn(500);
    });

    $('.in_photo_box:nth-child(2)>.photo_select').on('click', function () {
        var i = $(this).index();
        var q = i + 4;
        popup_box();
        $('#pop_title_box>li').eq(q).delay(600).fadeIn(500);
        $('#center_photo_box>ul').eq(q).fadeIn(500);
    });

    $('.in_photo_box:nth-child(3)>.photo_select').on('click', function () {
        var i = $(this).index();
        var q = i + 8;
        if(q <= 10){
            popup_box();
            $('#pop_title_box>li').eq(q).delay(600).fadeIn(500);
            $('#center_photo_box>ul').eq(q).fadeIn(500);
        }
        
        
    });

    var cl_i = 0;
    $('#right').click(function () {
        cl_i++;
        if (cl_i > 4) {
            cl_i = 4;
        };
        $('#center_photo_box>ul').stop().animate({
            left: -1316 * cl_i
        });
    });
    $('#left').click(function () {
        cl_i--;
        if (cl_i <= 0) {
            cl_i = 0;
        }
        $('#center_photo_box>ul').stop().animate({
            left: -1316 * cl_i
        });
    });


    $('#pop_x_box').click(function () {
        popdown_box();
    });



    /*page_4----------------------------------------------------------------------*/

    function p4_mouse_out() {

        $('#p4_skill_box>li>div').stop().animate({
            top: 190 + 'px'
        });
    }


    //p4 메인 스킬 포인트 무빙 함수

    $('#p4_skill_text>li:nth-child(1)').mouseenter(function () {
        $('#p4_skill_box>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
    }).mouseleave(function () {
        p4_mouse_out();
    });
    $('#p4_skill_text>li:nth-child(2)').mouseenter(function () {
        $('#p4_skill_box>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(4)>div').stop().delay(450).animate({
            top: 100 + 'px'
        });
    }).mouseleave(function () {
        p4_mouse_out();
    });
    $('#p4_skill_text>li:nth-child(3)').mouseenter(function () {
        $('#p4_skill_box>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(4)>div').stop().delay(450).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(5)>div').stop().delay(600).animate({
            top: 0
        });
    }).mouseleave(function () {
        p4_mouse_out();
    });
    $('#p4_skill_text>li:nth-child(4)').mouseenter(function () {
        $('#p4_skill_box>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(4)>div').stop().delay(450).animate({
            top: 0
        });
    }).mouseleave(function () {
        p4_mouse_out();
    });
    $('#p4_skill_text>li:nth-child(5)').mouseenter(function () {
        $('#p4_skill_box>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(4)>div').stop().delay(450).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(5)>div').stop().delay(600).animate({
            top: 0
        });
        $('#p4_skill_box>li:nth-child(6)>div').stop().delay(750).animate({
            top: 0
        });
    }).mouseleave(function () {
        p4_mouse_out();
    });



    //p4 simple 스킬 포인트 무빙 함수

    function sim_skill_1() {
        $('#p4_skill_sim>div:nth-child(1)>ul:nth-child(2)>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(1)>ul:nth-child(2)>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(1)>ul:nth-child(2)>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
    }

    function sim_skill_2() {
        $('#p4_skill_sim>div:nth-child(2)>ul:nth-child(2)>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(2)>ul:nth-child(2)>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(2)>ul:nth-child(2)>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(2)>ul:nth-child(2)>li:nth-child(4)>div').stop().delay(450).animate({
            top: 35 + 'px'
        });
    }

    function sim_skill_3() {
        $('#p4_skill_sim>div:nth-child(3)>ul:nth-child(2)>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(3)>ul:nth-child(2)>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(3)>ul:nth-child(2)>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(3)>ul:nth-child(2)>li:nth-child(4)>div').stop().delay(450).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(3)>ul:nth-child(2)>li:nth-child(5)>div').stop().delay(600).animate({
            top: 0
        });
    }

    function sim_skill_4() {
        $('#p4_skill_sim>div:nth-child(4)>ul:nth-child(2)>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(4)>ul:nth-child(2)>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(4)>ul:nth-child(2)>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(4)>ul:nth-child(2)>li:nth-child(4)>div').stop().delay(450).animate({
            top: 0
        });
    }

    function sim_skill_5() {
        $('#p4_skill_sim>div:nth-child(5)>ul:nth-child(2)>li:nth-child(1)>div').stop().animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(5)>ul:nth-child(2)>li:nth-child(2)>div').stop().delay(150).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(5)>ul:nth-child(2)>li:nth-child(3)>div').stop().delay(300).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(5)>ul:nth-child(2)>li:nth-child(4)>div').stop().delay(450).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(5)>ul:nth-child(2)>li:nth-child(5)>div').stop().delay(600).animate({
            top: 0
        });
        $('#p4_skill_sim>div:nth-child(5)>ul:nth-child(2)>li:nth-child(6)>div').stop().delay(750).animate({
            top: 0
        });
    }


    //p4 simple 버튼 눌렀을때 화면전환 이벤트

    function skill_sim_movie() {
        $('#p4_skill_sim>div>div').stop().animate({
            left: 0
        }, function () {
            $(this).stop().animate({
                left: 958 + 'px'
            }, function () {
                $(this).css({
                    left: -958 + 'px'
                });
            })
        });
    }


    function simple_reset() {
        $('#p4_skill_sim>div>ul:nth-child(2)>li>div').stop().animate({
            top: 65 + 'px'
        });
        $('#p4_skill_sim>div>ul').stop().fadeOut(500);
        $('#p4_skill_text').stop().delay(200).fadeIn(500);
        two = false;
    }


    //p4 simple 버튼 이벤트

    var two = false;
    $('#p4_skill_sim_but').click(function () {
        if (!two) {
            $('#p4_skill_sim_but>li').text('BACK');
            $('#p4_skill_text,#p4_skill_box').stop().fadeOut(500);
            $('#p4_skill_sim>div>div').stop().delay(400).animate({
                left: 0
            }, function () {
                $(this).stop().animate({
                    left: 958 + 'px'
                }, function () {
                    $(this).css({
                        left: -958 + 'px'
                    });
                    sim_skill_1();
                    sim_skill_2();
                    sim_skill_3();
                    sim_skill_4();
                    sim_skill_5();
                });
                $('#p4_skill_sim>div>ul').stop().fadeIn(500);
            });
            skill_reset();
            two = true;
        } else {
            $('#p4_skill_sim_but>li').text('SIMPLE');
            $('#p4_skill_sim>div>ul:nth-child(2)>li>div').stop().animate({
                top: 65 + 'px'
            });
            skill_sim_movie();
            $('#p4_skill_text,#p4_skill_box').stop().delay(300).fadeIn(500, function () {
                $('#p4_skill_text>li').stop().animate({
                    opacity: 1,
                    top: 0
                });
                $('#p4_skill_box').stop().delay(300).animate({
                    opacity: 1
                }, function () {
                    $('#p4_skill_box>li>div').stop().animate({
                        top: 190 + 'px'
                    });
                });
            });
            $('#p4_skill_sim>div>ul').stop().fadeOut(500);
            two = false;
        }
    });



    /*page_5----------------------------------------------------------------------*/
    

    function p5_scroll_reset() {
        $('#p5_left_top>div>ul>div,#p5_left_bot>div>ul>div,#p5_bot_text_box>div>div').css({
            display: 'block'
        });
        $('#p5_left_top>ul>li,#p5_left_bot>ul>li,#p5_bot_text_box>ul>li').stop().animate({
            opacity: 0
        });
        $('#p5_left_top>div>ul>li,#p5_left_bot>div>ul>li,#p5_right_box_2>p,#p5_bot_text_box>div>ul>li').css({
            display: 'none'
        });
        $('#p5_right_img_box').css({
            opacity: 0,
            left: 300 + 'px'
        });
        $('#p5_saying').css({
            opacity: 0,
            top: 566 + 'px'
        });
    }

    var wh = $('#p5_base').height();

    $('#page_5').scroll(function () {
        var sct = $('#page_5').scrollTop();
        if (sct >= wh * 0.18 && sct < wh * 0.29) {
            $('#p5_right_img_box').stop().animate({
                opacity: 1,
                left: 180 + 'px'
            }, 700, function () {
                $('#p5_right_box_2>p').fadeIn(500);
            });
            $('#p5_left_top>ul>li').stop().animate({
                opacity: 1
            });
            $('#p5_left_top>div>ul>div').stop().animate({
                left: 0
            }, function () {
                $(this).animate({
                    left: 488 + 'px'
                }, function () {
                    $(this).css({
                        left: -488 + 'px',
                        display: 'none'
                    });
                });
                $('#p5_left_top>div>ul>li').fadeIn(500);
            });

        } else if (sct >= wh * 0.29 && sct < wh * 0.5) {
            $('#p5_left_bot>ul>li').stop().animate({
                opacity: 1
            });
            $('#p5_left_bot>div>ul>div').stop().animate({
                left: 0
            }, function () {
                $(this).animate({
                    left: 134 + 'px'
                }, function () {
                    $(this).css({
                        left: -134 + 'px',
                        display: 'none'
                    });
                });
                $('#p5_left_bot>div>ul>li').fadeIn(500);
            });
        } else if (sct >= wh * 0.5 && sct < wh * 0.56) {
            $('#p5_bot_text_box>ul>li').stop().animate({
                opacity: 1
            });
            $('#p5_bot_text_box>div>div').stop().animate({
                left: 0
            }, function () {
                $(this).animate({
                    left: 522 + 'px'
                }, function () {
                    $(this).css({
                        left: -522 + 'px',
                        display: 'none'
                    });
                });
                $('#p5_bot_text_box>div>ul>li').fadeIn(500);
            });
        } else if (sct >= wh * 0.56 && sct < wh * 1) {
            $('#p5_saying').stop().animate({
                top: 556 + 'px',
                opacity: 1
            }, 1000);
        }
    });



});
