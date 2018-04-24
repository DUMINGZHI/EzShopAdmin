<?php
    namespace catetree;

    class Catetree {

        public function catetree($cateRes){
            return $this->sort($cateRes);
        }
        public function sort($cateRes,$pid=0,$level=0){
            static $arr = array();
            foreach ($cateRes as $k => $v) {
                if($v['pid']==$pid){
                    $v['level']=$level;
                    $arr[] = $v;
                    $this->sort($cateRes,$v['id'],$level+1);
                }
            }

            return $arr;
        }

        //获取子栏目id
        public function childrenids($cateid,$db){
            $data=$db->field('id,pid')->select();
            return $this->_childrenids($data,$cateid);
        }

        private function _childrenids($data,$cateid){
            static $arr=array();
            foreach ($data as $k => $v) {
                if($v['pid']==$cateid){
                    $arr[]=$v['id'];
                    $this->_childrenids($data,$v['id']);
                }
            }

            return $arr;
        }

        //栏目排序
        public function cateSort($data,$db){
            foreach ($data as $k => $v) {
                $db->update(['id'=>$k,'sort'=>$v]);
            }
        }



        //处理批量删除
        public function pdel($cateids){
                foreach ($cateids as $k => $v) {
                    $childrenidsarr[]=$this->childrenids($v);
                    $childrenidsarr[]=(int)$v;
                }  
                $_childrenidsarr=array();
                foreach ($childrenidsarr as $k => $v) {
                    if(is_array($v)){
                        foreach ($v as $k1 => $v1) {
                           $_childrenidsarr[]=$v1;
                        }
                    }else{
                        $_childrenidsarr[]=$v;
                    }
                }
                $_childrenidsarr=array_unique($_childrenidsarr);
                $this::destroy($_childrenidsarr);
        
        }
    }

