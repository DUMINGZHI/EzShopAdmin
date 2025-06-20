/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50505
Source Host           : 127.0.0.1:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-04-07 12:39:24
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '测试', '测试', '测试', '测试', '测试', 'http://www.baidu.com', null, '<p>测试</p>', '1', '1', '9', '1522072145');
INSERT INTO `article` VALUES ('2', '测试测试测试', '测试测试', '测试测试', '测试测试', '测试测试', 'http://www.dumingzhi.com', '20180329\\d6904a24616d8be89df0219ac016ed42.jpg', '<p>测试测试</p>', '0', '1', '8', '1522072190');

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of attr
-- ----------------------------
INSERT INTO `attr` VALUES ('1', '颜色', '1', '白色,蓝色,黑色', '2');
INSERT INTO `attr` VALUES ('5', '123', '1', '123', '5');
INSERT INTO `attr` VALUES ('6', '2', '1', '2', '5');

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
INSERT INTO `brand` VALUES ('1', '123', 'www.dumingzhi.com', '20180320\\699dfccc484add5231192c4308da9347.jpg', '123是我', '50', '1');
INSERT INTO `brand` VALUES ('2', ' 百度', 'www.baidu.com', '20180320\\699dfccc484add5231192c4308da9347.jpg', '百度啊', '50', '1');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of cate
-- ----------------------------
INSERT INTO `cate` VALUES ('1', '系统', '1', '系统', '系统', '0', '1', '0');
INSERT INTO `cate` VALUES ('2', '网店帮助信息', '2', '网店帮助信息', '网店帮助信息', '0', '50', '1');
INSERT INTO `cate` VALUES ('3', '网店信息', '4', '网店信息', '网店信息', '0', '50', '1');
INSERT INTO `cate` VALUES ('4', '新手上路', '3', '新手上路', '新手上路', '1', '50', '2');
INSERT INTO `cate` VALUES ('5', '支付与配送', '3', '支付与配送', '支付与配送', '1', '50', '2');
INSERT INTO `cate` VALUES ('6', '测试1', '5', '测试1', '测试1', '1', '2', '0');
INSERT INTO `cate` VALUES ('7', '测试2', '5', '测试2', '测试2', '1', '3', '0');
INSERT INTO `cate` VALUES ('8', '测试111111', '5', '测试1', '测试111', '0', '2', '6');
INSERT INTO `cate` VALUES ('9', '测试222', '5', '测试222', '测试222', '1', '1', '6');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '男装', '20180402\\9667af1eb92ed24d3fb991a60c795c37.jpg', '123', '132', '5', '0', '0');
INSERT INTO `category` VALUES ('2', '阿迪达斯', null, '1', '1', '4', '1', '1');
INSERT INTO `category` VALUES ('3', '123', null, '1', '1', '3', '2', '1');

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
INSERT INTO `conf` VALUES ('1', 'dmin', '123', 'input', '1', '', 'input的value3');
INSERT INTO `conf` VALUES ('2', 'd', '1231', 'radio', '1', '123,杜mz,dmin', '杜mz');
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
  `goods_name` varchar(255) DEFAULT NULL,
  `goods_num` varchar(16) DEFAULT NULL,
  `or_thumb` varchar(255) DEFAULT NULL,
  `sm_thumb` varchar(255) DEFAULT NULL,
  `mid_thumb` varchar(255) DEFAULT NULL,
  `big_thumb` varchar(255) DEFAULT NULL,
  `market_price` decimal(10,0) DEFAULT NULL,
  `shop_price` decimal(10,0) DEFAULT NULL,
  `on_sale` tinyint(4) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `goods_des` longtext,
  `goods_weight` double DEFAULT NULL,
  `weight_unit` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------

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
