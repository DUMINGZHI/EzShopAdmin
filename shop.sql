/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-04-19 20:47:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `link_url` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `thumb` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `content` longtext CHARACTER SET utf8,
  `show_top` tinyint(255) DEFAULT '0',
  `show_status` tinyint(255) DEFAULT '1',
  `cate_id` smallint(6) DEFAULT NULL,
  `addtime` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('3', '售后流程', '售后流程', '售后流程', '售后流程', '', '', null, '<p>售后流程</p>', '1', '1', '4', '1524139903');
INSERT INTO `article` VALUES ('4', '购物流程', '购物流程', '购物流程', '购物流程', '', '', null, '', '1', '1', '4', '1524139930');
INSERT INTO `article` VALUES ('5', '订购方式', '订购方式', '订购方式', '订购方式', '', '', null, '', '1', '1', '4', '1524139939');
INSERT INTO `article` VALUES ('6', '货到付款区域', '', '', '', '', '', null, '', '1', '1', '5', '1524139950');
INSERT INTO `article` VALUES ('7', '配送支付智能查询', '', '', '', '', '', null, '', '1', '1', '5', '1524139961');
INSERT INTO `article` VALUES ('8', '支付方式说明', '', '', '', '', '', null, '', '1', '1', '5', '1524139967');
INSERT INTO `article` VALUES ('9', '资金管理', '', '', '', '', '', null, '', '1', '1', '10', '1524140023');
INSERT INTO `article` VALUES ('10', '我的收藏', '', '', '', '', '', null, '', '1', '1', '10', '1524140031');
INSERT INTO `article` VALUES ('11', '我的订单', '', '', '', '', '', null, '', '1', '1', '10', '1524140037');
INSERT INTO `article` VALUES ('12', '退换货原则', '', '', '', '', '', null, '', '1', '1', '11', '1524140045');
INSERT INTO `article` VALUES ('13', '售后服务保证', '', '', '', '', '', null, '', '1', '1', '11', '1524140052');
INSERT INTO `article` VALUES ('14', '产品质量保证', '', '', '', '', '', null, '', '1', '1', '11', '1524140060');
INSERT INTO `article` VALUES ('15', '网站故障报告', '', '', '', '', '', null, '', '1', '1', '12', '1524140068');
INSERT INTO `article` VALUES ('16', '选机咨询', '', '', '', '', '', null, '', '1', '1', '12', '1524140074');
INSERT INTO `article` VALUES ('17', '投诉与建议', '', '', '', '', '', null, '', '1', '1', '12', '1524140081');

-- ----------------------------
-- Table structure for attr
-- ----------------------------
DROP TABLE IF EXISTS `attr`;
CREATE TABLE `attr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attr_name` varchar(255) DEFAULT NULL,
  `attr_type` int(255) DEFAULT '1',
  `attr_values` varchar(255) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of attr
-- ----------------------------
INSERT INTO `attr` VALUES ('1', '颜色', '1', '白色,蓝色,黑色', '2');
INSERT INTO `attr` VALUES ('5', '123', '1', '123', '5');
INSERT INTO `attr` VALUES ('6', '2', '1', '2', '5');
INSERT INTO `attr` VALUES ('7', '内存', '1', '2g,4g,8g,16g', '2');
INSERT INTO `attr` VALUES ('8', '厂家', '2', '', '2');
INSERT INTO `attr` VALUES ('9', 'CPU', '2', 'I3470,奔腾', '2');

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` mediumint(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) DEFAULT NULL,
  `brand_url` varchar(255) DEFAULT NULL,
  `brand_img` varchar(255) DEFAULT NULL,
  `brand_description` varchar(255) DEFAULT NULL,
  `sort` smallint(255) DEFAULT '50',
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('1', '杜鸣志', 'www.dumingzhi.com', '20180320\\699dfccc484add5231192c4308da9347.jpg', '杜鸣志是我', '50', '1');
INSERT INTO `brand` VALUES ('2', '百度', 'www.baidu.com', '20180320\\699dfccc484add5231192c4308da9347.jpg', '百度啊', '50', '1');
INSERT INTO `brand` VALUES ('3', '腾讯qq', 'http://www.qq.com', '20180321\\7fbe34970bf408473fdc52b8e317f2dc.jpg', '腾讯qq', '50', '0');

-- ----------------------------
-- Table structure for cate
-- ----------------------------
DROP TABLE IF EXISTS `cate`;
CREATE TABLE `cate` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `cate_type` tinyint(255) DEFAULT '5',
  `keywords` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `show_nav` tinyint(4) DEFAULT '0',
  `sort` smallint(6) DEFAULT '50',
  `pid` smallint(6) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of cate
-- ----------------------------
INSERT INTO `cate` VALUES ('1', '系统', '1', '系统', '系统', '0', '1', '0');
INSERT INTO `cate` VALUES ('2', '网店帮助信息', '2', '网店帮助信息', '网店帮助信息', '0', '50', '1');
INSERT INTO `cate` VALUES ('3', '网店信息', '4', '网店信息', '网店信息', '0', '50', '1');
INSERT INTO `cate` VALUES ('4', '新手上路', '3', '新手上路', '新手上路', '1', '51', '2');
INSERT INTO `cate` VALUES ('5', '配送与支付', '3', '支付与配送', '支付与配送', '1', '52', '2');
INSERT INTO `cate` VALUES ('10', '会员中心', '3', '会员中心', '会员中心', '1', '53', '2');
INSERT INTO `cate` VALUES ('11', '服务保证', '3', '服务保证', '服务保证', '1', '54', '2');
INSERT INTO `cate` VALUES ('12', '联系我们', '3', '联系我们', '联系我们', '1', '55', '2');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `cate_img` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `sort` int(11) DEFAULT '50',
  `pid` int(11) DEFAULT '0',
  `show_cate` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '男装', '20180402\\9667af1eb92ed24d3fb991a60c795c37.jpg', '123', '132', '5', '0', '0');
INSERT INTO `category` VALUES ('2', '阿迪达斯', null, '1', '1', '4', '1', '1');
INSERT INTO `category` VALUES ('3', '123', null, '1', '1', '3', '2', '1');
INSERT INTO `category` VALUES ('4', '23123', null, '', '', '50', '2', '1');
INSERT INTO `category` VALUES ('5', '女装', null, '', '', '50', '0', '0');

-- ----------------------------
-- Table structure for conf
-- ----------------------------
DROP TABLE IF EXISTS `conf`;
CREATE TABLE `conf` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ename` varchar(255) DEFAULT NULL,
  `cname` varchar(255) DEFAULT NULL,
  `from_type` varchar(255) DEFAULT NULL,
  `conf_type` int(11) DEFAULT '1',
  `values` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of conf
-- ----------------------------
INSERT INTO `conf` VALUES ('1', 'dmin', '杜鸣志', 'input', '1', '', 'input的value3');
INSERT INTO `conf` VALUES ('2', 'd', '杜鸣志1', 'radio', '1', '杜鸣志,杜mz,dmin', '杜mz');
INSERT INTO `conf` VALUES ('3', 'sitename', '站点名称', 'select', '1', '一,二,三', '三');
INSERT INTO `conf` VALUES ('4', 'checkbox', '可选值', 'checkbox', '1', '一,二,三,四', '');
INSERT INTO `conf` VALUES ('5', 'textarea', '文本域', 'textarea', '1', '', '123123啊');
INSERT INTO `conf` VALUES ('7', 'checkboxcheckbox', '测试checkbox', 'checkbox', '1', '测试1,测试2,测试3', '测试1,测试2');
INSERT INTO `conf` VALUES ('8', 'image', '图片测试', 'file', '1', '', '20180402\\a59ff2f49dc3764d0f1783d376f766f3.png');
INSERT INTO `conf` VALUES ('9', 'image2', '图片测试2', 'file', '1', '', '20180402\\a26b48455c5ed72ee1805d3e60154a21.jpg');
INSERT INTO `conf` VALUES ('10', 'ceshiaaa', '测试啊啊啊', 'input', '2', '', 'zzzz1');
INSERT INTO `conf` VALUES ('11', 'ceshiaae', '测试啊啊额', 'checkbox', '2', '啊啊,恩恩,额额', '啊啊,恩恩,额额');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `goods_code` varchar(255) DEFAULT NULL,
  `or_thumb` varchar(255) DEFAULT NULL,
  `sm_thumb` varchar(255) DEFAULT NULL,
  `mid_thumb` varchar(255) DEFAULT NULL,
  `big_thumb` varchar(255) DEFAULT NULL,
  `market_price` decimal(10,2) DEFAULT NULL,
  `shop_price` decimal(10,2) DEFAULT NULL,
  `on_sale` int(11) DEFAULT '1',
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `goods_des` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `goods_weight` int(11) DEFAULT NULL,
  `weight_unit` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '测试商品1', '1523804307446994', '20180417\\7458bc2d683fe12df5b2005be6c80bb2.png', '20180417\\sm7458bc2d683fe12df5b2005be6c80bb2.png', '20180417\\mid7458bc2d683fe12df5b2005be6c80bb2.png', '20180417\\big7458bc2d683fe12df5b2005be6c80bb2.png', '10.00', '8.00', '0', '4', '1', '0', '<p>1</p>', '1', 'kg');
INSERT INTO `goods` VALUES ('2', '测试商品2', '1524053106369954', '20180418\\11247c7364688176b775058607851a86.jpg', '20180418\\sm11247c7364688176b775058607851a86.jpg', '20180418\\mid11247c7364688176b775058607851a86.jpg', '20180418\\big11247c7364688176b775058607851a86.jpg', '2.00', '4.00', '1', '4', '3', '2', '<p>2</p>', '3', 'kg');
INSERT INTO `goods` VALUES ('3', '测试商品3', '1524126183807128', null, null, null, null, '1.00', '1.00', '1', '1', '1', '2', '<p>3</p>', '1', 'kg');

-- ----------------------------
-- Table structure for goods_attr
-- ----------------------------
DROP TABLE IF EXISTS `goods_attr`;
CREATE TABLE `goods_attr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attr_id` int(11) DEFAULT NULL,
  `attr_value` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `attr_price` decimal(10,0) DEFAULT NULL,
  `goods_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods_attr
-- ----------------------------
INSERT INTO `goods_attr` VALUES ('1', '1', '白色', '1', '1');
INSERT INTO `goods_attr` VALUES ('2', '1', '蓝色', '2', '1');
INSERT INTO `goods_attr` VALUES ('3', '7', '2g', '3', '1');
INSERT INTO `goods_attr` VALUES ('4', '7', '4g', '4', '1');
INSERT INTO `goods_attr` VALUES ('5', '8', 'mac', null, '1');
INSERT INTO `goods_attr` VALUES ('6', '9', 'I3470', null, '1');
INSERT INTO `goods_attr` VALUES ('7', '1', '蓝色', '1', '2');
INSERT INTO `goods_attr` VALUES ('9', '7', '', '0', '2');
INSERT INTO `goods_attr` VALUES ('10', '7', '2', '2', '2');
INSERT INTO `goods_attr` VALUES ('11', '8', '', '0', '2');
INSERT INTO `goods_attr` VALUES ('12', '9', '', '0', '2');
INSERT INTO `goods_attr` VALUES ('13', '1', '3', '3', '2');
INSERT INTO `goods_attr` VALUES ('14', '1', '黑色', '2', '2');
INSERT INTO `goods_attr` VALUES ('15', '1', '白色', '1', '3');
INSERT INTO `goods_attr` VALUES ('16', '7', '2g', '2', '3');
INSERT INTO `goods_attr` VALUES ('17', '8', '123', '0', '3');
INSERT INTO `goods_attr` VALUES ('18', '9', 'I3470', '0', '3');
INSERT INTO `goods_attr` VALUES ('19', '1', '蓝色', '2', '3');

-- ----------------------------
-- Table structure for goods_photo
-- ----------------------------
DROP TABLE IF EXISTS `goods_photo`;
CREATE TABLE `goods_photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) DEFAULT NULL,
  `sm_photo` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `mid_photo` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `big_photo` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `or_photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods_photo
-- ----------------------------
INSERT INTO `goods_photo` VALUES ('1', '1', '20180415\\sm00f8e52ecf8e04218779ecaf985e311e.jpg', '20180415\\mid00f8e52ecf8e04218779ecaf985e311e.jpg', '20180415\\big00f8e52ecf8e04218779ecaf985e311e.jpg', '20180415\\00f8e52ecf8e04218779ecaf985e311e.jpg');
INSERT INTO `goods_photo` VALUES ('2', '1', '20180418\\sm42f19db73d611d30aae5e22edc1f8b31.jpg', '20180418\\mid42f19db73d611d30aae5e22edc1f8b31.jpg', '20180418\\big42f19db73d611d30aae5e22edc1f8b31.jpg', '20180418\\42f19db73d611d30aae5e22edc1f8b31.jpg');
INSERT INTO `goods_photo` VALUES ('4', '2', '20180418\\smd9cbb2bf069d7f87c182c71c2535a39f.png', '20180418\\midd9cbb2bf069d7f87c182c71c2535a39f.png', '20180418\\bigd9cbb2bf069d7f87c182c71c2535a39f.png', '20180418\\d9cbb2bf069d7f87c182c71c2535a39f.png');

-- ----------------------------
-- Table structure for member_level
-- ----------------------------
DROP TABLE IF EXISTS `member_level`;
CREATE TABLE `member_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `bom_point` int(11) DEFAULT NULL,
  `top_point` int(11) DEFAULT NULL,
  `rate` int(11) DEFAULT '100',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of member_level
-- ----------------------------
INSERT INTO `member_level` VALUES ('1', '注册会员', '0', '10000', '100');
INSERT INTO `member_level` VALUES ('3', '中级会员', '10001', '20000', '90');
INSERT INTO `member_level` VALUES ('4', '高级会员', '20001', '30000', '80');

-- ----------------------------
-- Table structure for member_price
-- ----------------------------
DROP TABLE IF EXISTS `member_price`;
CREATE TABLE `member_price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mprice` decimal(11,0) DEFAULT NULL,
  `mlevel_id` int(11) DEFAULT NULL,
  `goods_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of member_price
-- ----------------------------
INSERT INTO `member_price` VALUES ('16', '100', '1', '1');
INSERT INTO `member_price` VALUES ('17', '200', '3', '1');
INSERT INTO `member_price` VALUES ('18', '300', '4', '1');
INSERT INTO `member_price` VALUES ('25', '3', '1', '2');
INSERT INTO `member_price` VALUES ('26', '2', '3', '2');
INSERT INTO `member_price` VALUES ('27', '1', '4', '2');
INSERT INTO `member_price` VALUES ('46', '100', '1', '3');
INSERT INTO `member_price` VALUES ('47', '2', '3', '3');
INSERT INTO `member_price` VALUES ('48', '300', '4', '3');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) DEFAULT NULL,
  `goods_num` int(11) DEFAULT NULL,
  `goods_attr` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('14', '1', '10', '1,3');
INSERT INTO `product` VALUES ('15', '1', '10', '2,3');
INSERT INTO `product` VALUES ('16', '1', '30', '2,4');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('2', '笔记本');
INSERT INTO `type` VALUES ('5', '男装');
