<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:61:"E:\xampp\htdocs\shop./application/admin\view\article\edit.htm";i:1522330413;s:58:"E:\xampp\htdocs\shop\application\admin\view\common\top.htm";i:1521462190;s:59:"E:\xampp\htdocs\shop\application\admin\view\common\left.htm";i:1523363009;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>shop - dumingzhi.com</title>

    <meta name="description" content="Dashboard">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!--Basic Styles-->
    <link href="/shop/public/static/admin/style/bootstrap.css" rel="stylesheet">
    <link href="/shop/public/static/admin/style/font-awesome.css" rel="stylesheet">
    <link href="/shop/public/static/admin/style/weather-icons.css" rel="stylesheet">

    <!--Beyond styles-->
    <link id="beyond-link" href="/shop/public/static/admin/style/beyond.css" rel="stylesheet" type="text/css">
    <link href="/shop/public/static/admin/style/demo.css" rel="stylesheet">
    <link href="/shop/public/static/admin/style/typicons.css" rel="stylesheet">
    <link href="/shop/public/static/admin/style/animate.css" rel="stylesheet">
    <script type="text/javascript" src="/shop/public/static/admin/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" src="/shop/public/static/admin/ueditor/ueditor.all.min.js"></script>
    <script type="text/javascript" src="/shop/public/static/admin/ueditor/lang/zh-cn/zh-cn.js"></script>
    
</head>
<body>
    <!-- 头部 -->
    <div class="navbar">
    <div class="navbar-inner">
        <div class="navbar-container">
            <!-- Navbar Barnd -->
            <div class="navbar-header pull-left">
                <a href="#" class="navbar-brand">
                    <small>
                            <img src="/shop/public/static/admin/images/logo.png" alt="">
                        </small>
                </a>
            </div>
            <!-- /Navbar Barnd -->
            <!-- Sidebar Collapse -->
            <div class="sidebar-collapse" id="sidebar-collapse">
                <i class="collapse-icon fa fa-bars"></i>
            </div>
            <!-- /Sidebar Collapse -->
            <!-- Account Area and Settings -->
            <div class="navbar-header pull-right">
                <div class="navbar-account">
                    <ul class="account-area">
                        <li>
                            <a class="login-area dropdown-toggle" data-toggle="dropdown">
                                <div class="avatar" title="View your public profile">
                                    <img src="/shop/public/static/admin/images/adam-jansen.jpg">
                                </div>
                                <section>
                                    <h2><span class="profile"><span>admin</span></span></h2>
                                </section>
                            </a>
                            <!--Login Area Dropdown-->
                            <ul class="pull-right dropdown-menu dropdown-arrow dropdown-login-area">
                                <li class="username"><a>David Stevenson</a></li>
                                <li class="dropdown-footer">
                                    <a href="/admin/user/logout.html">
                                            退出登录
                                        </a>
                                </li>
                                <li class="dropdown-footer">
                                    <a href="/admin/user/changePwd.html">
                                            修改密码
                                        </a>
                                </li>
                            </ul>
                            <!--/Login Area Dropdown-->
                        </li>
                        <!-- /Account Area -->
                        <!--Note: notice that setting div must start right after account area list.
                            no space must be between these elements-->
                        <!-- Settings -->
                    </ul>
                </div>
            </div>
            <!-- /Account Area and Settings -->
        </div>
    </div>
</div>
    <!-- /头部 -->
    
    <div class="main-container container-fluid">
        <div class="page-container">
            <!-- Page Sidebar -->
            <div class="page-sidebar" id="sidebar">
                <!-- Page Sidebar Header-->
                <div class="sidebar-header-wrapper">
                    <input class="searchinput" type="text">
                    <i class="searchicon fa fa-search"></i>
                    <div class="searchhelper">Search Reports, Charts, Emails or Notifications</div>
                </div>
                <!-- /Page Sidebar Header -->
                <!-- Sidebar Menu -->
                <ul class="nav sidebar-menu">
                    <!--Dashboard-->                             
                <li>
                        <a href="#" class="menu-dropdown">
                            <i class="menu-icon fa fa-shopping-cart"></i>
                            <span class="menu-text">商品管理</span>
                            <i class="menu-expand"></i>
                        </a>
                            <ul class="submenu">
                                <li>
                                    <a href="<?php echo url('goods/lst'); ?>">
                                        <span class="menu-text">商品列表</span>
                                        <i class="menu-expand"></i>
                                    </a>
                                </li>
                            </ul>       
                            <ul class="submenu">
                                <li>
                                    <a href="<?php echo url('goods/add'); ?>">
                                        <span class="menu-text">添加商品</span>
                                        <i class="menu-expand"></i>
                                    </a>
                                </li>
                            </ul>     
                            <ul class="submenu">
                                <li>
                                    <a href="<?php echo url('brand/lst'); ?>">
                                        <span class="menu-text">商品品牌</span>
                                        <i class="menu-expand"></i>
                                    </a>
                                </li>
                            </ul>    
                            <ul class="submenu">
                                <li>
                                    <a href="<?php echo url('type/lst'); ?>">
                                        <span class="menu-text">商品类型</span>
                                        <i class="menu-expand"></i>
                                    </a>
                                </li>
                            </ul>    
                            <ul class="submenu">
                                <li>
                                    <a href="<?php echo url('category/lst'); ?>">
                                        <span class="menu-text">商品分类</span>
                                        <i class="menu-expand"></i>
                                    </a>
                                </li>
                            </ul>   
                            <ul class="submenu">
                                <li>
                                    <a href="/admin/document/index.html">
                                        <span class="menu-text">商品回收站</span>
                                        <i class="menu-expand"></i>
                                    </a>
                                </li>
                            </ul>                         
                </li>   

                <li>
                        <a href="#" class="menu-dropdown">
                            <i class="menu-icon fa fa-shopping-cart"></i>
                            <span class="menu-text">促销管理</span>
                            <i class="menu-expand"></i>
                        </a>
                            <ul class="submenu">
                                <li>
                                    <a href="/admin/document/index.html">
                                        <span class="menu-text">团购活动</span>
                                        <i class="menu-expand"></i>
                                    </a>
                                </li>
                            </ul>       
                            <ul class="submenu">
                                <li>
                                    <a href="/admin/document/index.html">
                                        <span class="menu-text">积分商城</span>
                                        <i class="menu-expand"></i>
                                    </a>
                                </li>
                            </ul>     
                            <ul class="submenu">
                                <li>
                                    <a href="/admin/document/index.html">
                                        <span class="menu-text">优惠券</span>
                                        <i class="menu-expand"></i>
                                    </a>
                                </li>
                            </ul>    
                </li>    
                                                  
                <li>
                    <a href="#" class="menu-dropdown">
                        <i class="menu-icon fa fa-shopping-cart"></i>
                        <span class="menu-text">订单管理</span>
                        <i class="menu-expand"></i>
                    </a>
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">订单列表</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>       
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">订单查询</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>     
                </li>    
                          
                <li>
                    <a href="#" class="menu-dropdown">
                        <i class="menu-icon fa fa-shopping-cart"></i>
                        <span class="menu-text">会员管理</span>
                        <i class="menu-expand"></i>
                    </a>
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">会员列表</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>       
                        <ul class="submenu">
                            <li>
                                <a href="<?php echo url('memberLevel/lst'); ?>">
                                    <span class="menu-text">会员等级</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>     
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">会员留言</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>    
                </li>                                                    
                    
                <!-- <li>
                    <a href="#" class="menu-dropdown">
                        <i class="menu-icon fa fa-shopping-cart"></i>
                        <span class="menu-text">权限</span>
                        <i class="menu-expand"></i>
                    </a>
                </li>      -->             

                <li>
                    <a href="#" class="menu-dropdown">
                        <i class="menu-icon fa fa-shopping-cart"></i>
                        <span class="menu-text">数据库管理</span>
                        <i class="menu-expand"></i>
                    </a>
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">数据备份</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>       
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">数据表优化</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>     
                </li>   

                <li>
                    <a href="#" class="menu-dropdown">
                        <i class="menu-icon fa fa-shopping-cart"></i>
                        <span class="menu-text">短信管理</span>
                        <i class="menu-expand"></i>
                    </a>
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">发送短信</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>       
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">短信签名</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>     
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">优惠券</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>    
                </li>                                            

                <li>
                    <a href="#" class="menu-dropdown">
                        <i class="menu-icon fa fa-shopping-cart"></i>
                        <span class="menu-text">文章模块</span>
                        <i class="menu-expand"></i>
                    </a>
                        <ul class="submenu">
                            <li>
                                <a href="<?php echo url('Cate/lst'); ?>">
                                    <span class="menu-text">文章分类</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>       
                        <ul class="submenu">
                            <li>
                                <a href="<?php echo url('Article/lst'); ?>">
                                    <span class="menu-text">文章管理</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>     
                </li>   

                 <li>
                    <a href="#" class="menu-dropdown">
                        <i class="menu-icon fa fa-shopping-cart"></i>
                        <span class="menu-text">系统设置</span>
                        <i class="menu-expand"></i>
                    </a>
                        <ul class="submenu">
                            <li>
                                <a href="<?php echo url('conf/conflst'); ?>">
                                    <span class="menu-text">配置项</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>       
                        <ul class="submenu">
                            <li>
                                <a href="<?php echo url('conf/lst'); ?>">
                                    <span class="menu-text">配置管理</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>     
                        <ul class="submenu">
                            <li>
                                <a href="/admin/document/index.html">
                                    <span class="menu-text">支付方式设置</span>
                                    <i class="menu-expand"></i>
                                </a>
                            </li>
                        </ul>    
                </li>      

                </ul>
                <!-- /Sidebar Menu -->
            </div>
            <!-- /Page Sidebar -->
            <!-- Page Content -->
            <div class="page-content">
                <!-- Page Breadcrumb -->
                <div class="page-breadcrumbs">
                    <ul class="breadcrumb">
                                        <li>
                        <a href="<?php echo url('index/index'); ?>">系统</a>
                    </li>
                                        <li>
                        <a href="<?php echo url('article/lst'); ?>">文章管理</a>
                    </li>
                                        <li class="active">修改文章</li>
                                        </ul>
                </div>
                <!-- /Page Breadcrumb -->

                <!-- Page Body -->
                <div class="page-body">
                    
<div class="row">
    <div class="col-lg-12 col-sm-12 col-xs-12">
        <div class="widget">
            <div class="widget-header bordered-bottom bordered-blue">
                <span class="widget-caption">修改文章</span>
            </div>
            <div class="widget-body">
                <div id="horizontal-form">
                    <form class="form-horizontal" action="" method="post" enctype="multipart/form-data">
                        <?php if(is_array($dbEdit) || $dbEdit instanceof \think\Collection || $dbEdit instanceof \think\Paginator): $i = 0; $__LIST__ = $dbEdit;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        <input type="hidden" name="id" value="<?php echo $vo['id']; ?>"> 
                         <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">所属栏目</label>
                            <div class="col-sm-6">
                               <select name="cate_id">
                                    <option value="">选择栏目</option>
                                    <?php if(is_array($dbCateRes) || $dbCateRes instanceof \think\Collection || $dbCateRes instanceof \think\Paginator): $i = 0; $__LIST__ = $dbCateRes;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?>
                                    <option value="<?php echo $v['id']; ?>" <?php if($vo['cate_id'] == $v['id']): ?> selected="selected" <?php endif; ?> ><?php echo str_repeat("-",$v['level']*5);?><?php echo $v['cate_name']; ?></option>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                               </select>
                            </div>
                            <p class="help-block col-sm-4 red">* 必填</p>
                        </div>
                        <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">标题</label>
                            <div class="col-sm-6">
                                <input class="form-control" name="title" required="" type="text" value="<?php echo $vo['title']; ?>">
                            </div>
                            <p class="help-block col-sm-4 red">* 必填</p>
                        </div>
                        <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">置顶</label>
                            <div class="col-sm-6">
                                <div class="control-group">
                                    <div class="radio">
                                        <label>
                                            <input name="show_top" type="radio" <?php if($vo['show_top'] == 1): ?> checked="checked" <?php endif; ?> class="colored-blue">
                                            <span class="text">是</span>
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input name="show_top" type="radio" <?php if($vo['show_top'] == 0): ?> checked="checked" <?php endif; ?> class="colored-blue">
                                            <span class="text">否</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">关键词</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" name="keywords" ><?php echo $vo['keywords']; ?></textarea>
                            </div>
                        </div>
                         <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">描述</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" name="description" ><?php echo $vo['description']; ?></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">作者</label>
                            <div class="col-sm-6">
                                <input class="form-control"  name="author" type="text" value="<?php echo $vo['author']; ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">邮箱</label>
                            <div class="col-sm-6">
                                <input class="form-control"  name="email" type="text" value="<?php echo $vo['email']; ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">外链</label>
                            <div class="col-sm-6">
                                <input class="form-control"  name="link_url" type="text" value="<?php echo $vo['link_url']; ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">缩略图</label>
                            <div class="col-sm-6">
                                <?php if($vo['thumb'] != ''): ?>
                                <img src="/shop/public/static/uploads/<?php echo $vo['thumb']; ?>" height="30px">
                                <?php else: ?>
                                暂无
                                <?php endif; ?>
                                <input name="thumb"  type="file">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="username" class="col-sm-2 control-label no-padding-right">内容</label>
                            <div class="col-sm-6">
                                <textarea name="content" id="content"><?php echo $vo['content']; ?></textarea>
                            </div>
                        </div>

                        
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="submit" class="btn btn-default">保存信息</button>
                            </div>
                        </div>
                       <?php endforeach; endif; else: echo "" ;endif; ?>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

                </div>
                <!-- /Page Body -->
            </div>
            <!-- /Page Content -->
        </div>  
    </div>

        <!--Basic Scripts-->
    <script src="/shop/public/static/admin/style/jquery_002.js"></script>
    <script src="/shop/public/static/admin/style/bootstrap.js"></script>
    <script src="/shop/public/static/admin/style/jquery.js"></script>
    <!--Beyond Scripts-->
    <script src="/shop/public/static/admin/style/beyond.js"></script>
    <script type="text/javascript">

    //实例化编辑器
    //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
    UE.getEditor('content',{initialFrameWidth:900,initialFrameHeight:400,});
    </script>


</body></html>