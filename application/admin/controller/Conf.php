<?php
namespace app\admin\controller;
use think\Controller;

class Conf extends Controller
{
	public function conflst()
    {	
    	$conf = db('conf');
    	if(request()->isPost()){
    		$data = input('post.');
    		$arr_name = array();
    		$data_name = array();
    		//处理空复选框的问题1.提出数据库中from_type为checkbox的ename然后比对提交的数据的k	
    		$res2d = $conf->field('ename')->where(array('from_type'=>'checkbox'))->select();
    		//找到from_type为checkbox的ename
    		if($res2d){
    			foreach ($res2d as $k => $v) {
    				$arr_name[] = $v['ename'];
    			}
    		}	

    		//提取处理传过来的数据+处理文字类型的配置
    		foreach ($data as $k => $v) {
    			$data_name[]=$k;
    			if(is_array($v)){
    				$arr = implode(',', $v);
    				$conf->where(array('ename'=>$k))->update(array('value'=>$arr));
    			}else{
    				$conf->where(array('ename'=>$k))->update(array('value'=>$v));
    			}
    		}
    		//对比
    		foreach ($arr_name as $k => $v) {
    			if(!in_array($v, $data_name)){
    				$conf->where(array('ename'=>$v))->update(array('value'=>''));
    			}
    		}
    		//图片处理
    		if($_FILES){
    			foreach ($_FILES as $k => $v) {
    				if($v['tmp_name']){
    					//删除以前的图片
    					$Src = $conf->field('value')->where(array('ename'=>$k))->find();
    					if($Src['value']){
    						$oldSrc = IMG_UPLOADS.$Src['value'];
    						if(file_exists($oldSrc)){
    							@unlink($oldSrc);
    						}
    					}
    					//调用上传方法
    					$imgSrc = $this->upload($k);
    					$conf->where(array('ename'=>$k))->update(array('value'=>$imgSrc));
    				}
    			}
    		}
    		$this->success('配置成功');
    	}

        $shopConfRes = $conf->where(array('conf_type'=>1))->select();
        $GoodsConfRes = $conf->where(array('conf_type'=>2))->select();
        $this->assign([
            'shopConfRes' => $shopConfRes,
            'GoodsConfRes' => $GoodsConfRes,
        ]);
        return $this->fetch('conflst');
    }
    public function lst()
    {
        $dbLst = db('conf')->paginate(10);
        $this->assign([
            'dbLst' => $dbLst,
        ]);
        return $this->fetch('list');
    }
    public function add()
    {	
        if(request()->isPost()){
            $data = input('post.');
            //改中文"，"变成英文的
            $data['values'] = str_replace("，", ",", $data['values']);
            //验证器
            $validate = validate('conf');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }

            $dbAdd = db('conf')->insert($data);
            if($dbAdd){
                $this->success('添加配置成功！','conf/lst');
            }else{
                $this->error('添加配置失败！');
                die();
            }  
        }

        return $this->fetch();
    }

    public function edit($id)
    {

        if(request()->isPost()){
            $data = input('post.');
            //改中文"，"变成英文的
            $data['values'] = str_replace("，", ",", $data['values']);
            //验证器
            $validate = validate('conf');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }
            $dbUpdate = db('conf')->update($data);
            if($dbUpdate){
                $this->success('修改配置成功！','conf/lst');
            }else{
                $this->error('修改配置失败！');
                die();
            }  
        }

        $dbEdit = db('conf')->select($id);
        $this->assign([
            'dbEdit' => $dbEdit,
        ]);
        return $this->fetch();
    }

    public function del($id)
    {
        $dbDel = db('conf')->delete($id);
        if($dbDel){
                $this->success('删除配置成功！','conf/lst');
            }else{
                $this->error('删除配置失败！');
                die();
            }
    }

    //图片上传实现方法
    public function upload($imgScr){
        $file = request()->file($imgScr);
        // 移动到框架应用根目录/public/static/uploads/目录下
        if($file){
            $info = $file->move(ROOT_PATH . 'public' . DS . 'static' . DS . 'uploads');
                if($info){
                    return $info->getSaveName();
                }else{
                    echo $file->getError();
                    die();
                }
        }
    }

}
