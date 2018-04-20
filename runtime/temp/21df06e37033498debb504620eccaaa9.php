<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:58:"E:\xampp\htdocs\shop./application/admin\view\cate\list.htm";i:1521897089;s:58:"E:\xampp\htdocs\shop\application\admin\view\common\top.htm";i:1521462190;s:59:"E:\xampp\htdocs\shop\application\admin\view\common\left.htm";i:1523363009;}*/ ?>
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
                                        <li class="active">分类管理</li>
                                        </ul>
                </div>
                <!-- /Page Breadcrumb -->

                <!-- Page Body -->
                <div class="page-body">
                    
<button type="button" tooltip="添加分类" class="btn btn-sm btn-azure btn-addon" onClick="javascript:window.location.href = '<?php echo url('Cate/add'); ?>'"> <i class="fa fa-plus"></i> Add
</button>
<div class="row">
    <div class="col-lg-12 col-sm-12 col-xs-12">
        <div class="widget">
            <div class="widget-body">
                <div class="flip-scroll">
                    <table class="table table-bordered table-hover">
                        <thead class="">
                            <tr>
                                <th class="text-center">ID</th>
                                <th class="text-center">分类名字</th>
                                <th class="text-center">类型</th>
                                <th class="text-center">显示到导航栏</th>
                                <th class="text-center">排序</th>
                                <th class="text-center">操作</th>
                            </tr>
                        </thead>
                        <form action="" method="post">
                        <tbody>
                            <?php if(is_array($dbCate) || $dbCate instanceof \think\Collection || $dbCate instanceof \think\Paginator): $i = 0; $__LIST__ = $dbCate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                            <tr>
                                <td align="center" width="10%"><?php echo $vo['id']; ?></td>
                                <td align="left" ><?php echo str_repeat("-",$vo['level']*5);?><?php echo $vo['cate_name']; ?></td>
                                <td align="center" width="10%">
                                <?php if($vo['cate_type'] == 1): ?>
                                系统分类
                                <?php elseif($vo['cate_type'] == 2): ?>
                                帮助分类
                                <?php elseif($vo['cate_type'] == 3): ?>
                                网店帮助
                                <?php elseif($vo['cate_type'] == 4): ?>
                                网店信息
                                <?php elseif($vo['cate_type'] == 5): ?>
                                普通分类
                                <?php endif; ?>
                                </td>
                                <td align="center" width="10%">
                                    <?php if($vo['show_nav'] == 1): ?>
                                    是
                                    <?php else: ?>
                                    否
                                    <?php endif; ?>
                                </td>
                                <td align="center" width="10%"><input type="text" name="sort[<?php echo $vo['id']; ?>]" value="<?php echo $vo['sort']; ?>" style="width: 50px; text-align: center;"></td>
                                <td align="center" width="15%">
                                    <a href="<?php echo url('cate/edit',array('id'=>$vo['id'])); ?>" class="btn btn-primary btn-sm shiny">
                                        <i class="fa fa-edit"></i> 编辑
                                    </a>
                                    <?php if(!in_array(($vo['id']), explode(',',"1,2,3"))): ?>
                                    <a href="#" onClick="warning('确实要删除吗', '<?php echo url('cate/del',array('id'=>$vo['id'])); ?>')" class="btn btn-danger btn-sm shiny">
                                        <i class="fa fa-trash-o"></i> 删除
                                    </a>
                                    <?php else: ?>
                                    <a href="#" disabled='disabled' class="btn btn-danger btn-sm shiny">
                                        <i class="fa fa-trash-o"></i> 删除
                                    </a>
                                    <?php endif; ?>
                                </td>
                            </tr>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                            <tr><td colspan="6" align="right" style="padding-right: 18.3%;"><input type="submit" class="btn btn-danger btn-sm shiny"></td></tr>
                        </tbody>
                        </form>
                    </table>
                </div>
                <div style="text-align: center; padding-top: 10px">
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
    


</body></html>