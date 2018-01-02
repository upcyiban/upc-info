# 本文档是中国石油大学前端开发时的项目。

### 2018年以后的所有的轻应用都在此项目集成
[前端接口文档和开发者须知](https://www.kancloud.cn/lei1142908626/upc-info/490131)



1.  如何开发轻应用  


			1>	将本项目fork到自己的远程仓库  
            
            
            2>	clone  
            
            
            3>	建立一个本地分支，用来获取远程分支的更新  
            
            
            		``git remote add yiban git@github.com:upcyiban/upc-info.git``  
                    
                    
            4>  编写代码，测试完善，获取分支更新,进行项目打包并运行,确认无误后，  
            
            
            		``git pull yiban & git merge master yiban``
            		``npm run run-build``
                    ``git push origin master``  
                    
                    
            5>  确保没有修改common包中的代码，或是修改了并且在   看云   中更新了接口文档后做PR  
            
            
            		也就是 pull request  




* * * * *

* * * * *

* * * * *



  
2.   如何为轻应用设置路径  


			1>	 确保自己的轻应用项目所使用的路由均有自己应用的前缀，前缀不可重复
