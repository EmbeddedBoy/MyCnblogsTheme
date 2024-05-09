function milusidebar(setting) {
    var c = {
      "names": "博客名字",
      "notice": '博客公告',
      "headerUrl": "公告栏背景图链接",
      "follow": "账户头像follow",
      "sidebarInfo": [
        [//第一行显示
          {"icon": "#icon-github1", "url": "GitHub网址", "title": "github"},
          {"icon": "#icon-weixin", "url": "", "title": "微信", "classname": "popper_weixin", "click": false},
          {"icon": "#icon-QQ", "url": "链接", "title": "QQ"},
          {"icon": "#icon-juejin", "url": "链接", "title": "掘金"}
        ],
        [//第二行显示
          {"icon": "#icon-weibobangding", "url": "链接", "title": "微博"},
          {"icon": "#icon-csdn", "url": "链接", "title": "CSDN"},
          {"icon": "#icon-bilibili", "url": "链接", "title": "bilibili"},
          {"icon": "#icon-yuquemianlogo", "url": "链接", "title": "语雀"}
        ]
      ],
      "signature": "签名",
      "portrait": "头像链接"
    };
  
    // 合并默认设置和传入的设置
    $.extend(c, setting);
  
    // 调用sidebar函数并传入设置
    sidebar(c);
  }
  
  function sidebar(c) {
    // 添加公告
    $("#sidebar_news .catListTitle").text("个人信息");
    $("#sidebar_news .catListTitle").before('<h3 class="catListTitle">公告</h3><div style="background:url(' + c.headerUrl + ');height:150px;background-size: auto 150px;background-repeat: no-repeat;background-position:center;margin-bottom:10px"><p class="notice_title">' + c.notice + "<p></div>");
  
    // 添加关注按钮
    var p_b_follow = $("#p_b_follow").html();
    $("#profile_block").before('<div class="attention" onclick="follow(\'' + c.follow + "')\"><span>+加关注</span></div>");
  
    var le = c.sidebarInfo.length;
    var sidebarInfoHtml = '<p class="catListTitle" style="font-weight:500;margin-top:10px;">' + c.names + '</p><table id="info_table" style="">';
    var sidebarInfo = c.sidebarInfo;
  
    // 构建侧边栏信息
    for (var i = 0; i < le; i++) {
      sidebarInfoHtml += "<tr>";
      for (var j = 0; j < sidebarInfo[i].length; j++) {
        if (sidebarInfo[i][j].click == false) {
          sidebarInfoHtml += '<td><svg class="icon ' + sidebarInfo[i][j].classname + '" aria-hidden="true"><use xlink:href="' + sidebarInfo[i][j].icon + '"></use></svg></td>';
        } else {
          sidebarInfoHtml += '<td><a href="' + sidebarInfo[i][j].url + '" target="_black" title="' + sidebarInfo[i][j].title + '"><svg class="icon ' + sidebarInfo[i][j].classname + '" aria-hidden="true"><use xlink:href="' + sidebarInfo[i][j].icon + '"></use></svg></a></td>';
        }
      }
      sidebarInfoHtml += "</tr>";
    }
    sidebarInfoHtml += '</table><p class="catListTitle" style="margin-bottom:20px">' + c.signature + "</p>";
  
    // 添加侧边栏信息
    $("#blog-news").append(sidebarInfoHtml);
    $("#blog-calendar").before('<h3 class="catListTitle">日历</h3>');
  
    // 初始化弹出框
    tippy(".popper_weixin", {
      content: c.popper_weixin,
      theme: "tomato",
      allowHTML: true,
      animation: "scale",
      duration: 500,
      arrow: true,
      hideOnClick: "false",
      interactive: true
    });
  
    // 添加头像
    var portrait = '<div id="portrait"><img src="' + c.portrait + '" /></div>';
    $("#profile_block").before(portrait);
  
    // 添加搜索图标
    var search = '<svg class="icon search_icon" aria-hidden="true" onclick="zzk_go()"><use xlink:href="#icon-sousuo"></use></svg >';
    $(".input_my_zzk").after(search);
    $(".input_my_zzk").eq(1).parent().find("svg").attr("onclick", "google_go()");
    $(".input_my_zzk").eq(0).attr("placeholder", "搜索关键词~");
    $(".input_my_zzk").eq(1).attr("placeholder", "谷歌内搜索~");
  }
  