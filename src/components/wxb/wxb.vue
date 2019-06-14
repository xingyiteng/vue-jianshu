<template>
  <el-row class="main" style="padding-top:30px; margin-top:58px;">
    <el-col :span="16" :xs="24" :md="16" style="padding-left: 15px;">
      <div class="main_top">
        <router-link class="top_l" to="##">
          <img src="../../assets/dpd/ren.jpg" alt>
        </router-link>

        <div class="top_r">
          <router-link to="###">发简信</router-link>
          <div class="button" to="###">
            <i class="el-icon-plus"></i>
            <span>关注</span>
          </div>
        </div>

        <div class="top_c">
          <router-link class="xb" to="##">吴晓布</router-link>
          <ul>
            <li>
              <router-link to="###">
                <p>120</p>关注
                <i class="el-icon-arrow-right"></i>
              </router-link>
            </li>
            <li>
              <router-link to="###">
                <p>217087</p>粉丝
                <i class="el-icon-arrow-right"></i>
              </router-link>
            </li>
            <li>
              <router-link to="###">
                <p>245</p>文章
                <i class="el-icon-arrow-right"></i>
              </router-link>
            </li>
            <li>
              <router-link to="###">
                <p>671949</p>字数
              </router-link>
            </li>
            <li>
              <router-link to="###">
                <p>21329</p>收获喜欢
              </router-link>
            </li>
            <li style="border:0">
              <router-link to="###">
                <p>11.1w</p>简书钻
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="main_b">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="文章" name="first">
            <div class="main_b1">
              <ul>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb9.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>湖南 | 烟雨凤凰古城</router-link>
                    <p>1. 凤凰古城，边城浪子。如果我是边城，那么你就是浪子。 一次偶然，我和詹姆斯吃着饭，詹姆斯说来了这么久也没有出去，不如周末开车去哪里转转。 我...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb10.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>《认知:所谓成长就是认知升级》签名版赠书活动</router-link>
                    <p>新书《认知:所谓成长就是认知升级》已经出版2个月，当当网独家销售，在这里感谢大家的支持。 豆瓣评分9.1分。 为感谢大家，提供福利，接下来的三个...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>06.03 22:11</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb11.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>关于读书日</router-link>
                    <p>如果一件事情要用一个专门的日子来提醒大家而且还不能放假，说明这件事情已经沦落到需要用一个节日来提醒，属于看上去很重要，但是容易被选择性忽视的那一...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb12.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>书出版了，我想和你们聊聊这些</router-link>
                    <p>我并非天资聪颖，也算不上愚钝，属于中等水平，在小学初中的时候算得上是学渣中的佼佼者，除了课本之外的书我都热爱。就这样的我，现在竟然出版了一本书，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb13.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>自驾云南 | 又见丽江束河泸沽湖</router-link>
                    <p>丽江束河古镇 自驾的好处在于想去哪里就去哪里。 离开阴雨连绵的广西，进入云贵高原，在这片海拔适中的区域，天空一如既往的蓝，空气通透，富含紫外线，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb14.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>自驾广西 | 中越边境的山水风光</router-link>
                    <p>2019年的春节，我用车轮丈量了5000公里的土地，从广西到云南，再到四川，最后返回广东。 行走了风光省道广西沿边公路，再到丽江束河古镇做了短暂...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb15.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>微观之美 | 那些我们不曾注意的细节</router-link>
                    <p>有一天晚上睡梦中迷迷糊糊听到床边防潮箱里传来一阵窃窃私语，我偷偷的起身望过去。 防潮箱里放着几台相机，里面包括几台数码单反、胶片单反、黑卡，还有...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb16.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>回乡掠影 | 祝各位简友新春快乐</router-link>
                    <p>少小离家老大回，柳暗花明又一村。我对老家的形象像坏了的钟一样定格在小时候。烟花爆竹如银蛇飞舞，舞龙醒狮栩栩如生，我躲在大人身后新奇的看着。盼望着...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb17.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>你在茅庐里自比卧龙，实际上只是卧槽</router-link>
                    <p>这是一个思想实验。 假如你有一点积蓄，一年不工作至少能保证温饱不是问题。只不过觉得工作给你泰山压顶的感觉，生活让你有点喘不过气，很久没有享受过一...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb18.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>简约之美 | 藏在城市里的线条和平面</router-link>
                    <p>冬日，晴，无风，忌工作。 道路干净到看不见一片落叶，哦，这个城市只会在除了冬季之外任何一个季节里落叶。 包了整条街，没有花一分钱。 红色，黄色，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb19.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>世间的美好，在于山间清晨和海边日出</router-link>
                    <p>冬季，不适合看海，因为冷。风太大，吹在身上见缝就钻，无处可躲。 冬季，不适合拍海，因为冷。穿太多，背着器材不便操作，限制重重。 冬天的好处在于，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb20.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>没有马的太阳马戏团</router-link>
                    <p>因为看了金刚狼出演的电影《马戏之王》，我对马戏产生了浓厚的兴趣，于是去看了一场在深圳演出的世界级马戏表演。 太阳马戏（法语：Cirque Du ...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="动态" name="second">
            <div class="main_b1">
              <ul>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb17.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>你在茅庐里自比卧龙，实际上只是卧槽</router-link>
                    <p>这是一个思想实验。 假如你有一点积蓄，一年不工作至少能保证温饱不是问题。只不过觉得工作给你泰山压顶的感觉，生活让你有点喘不过气，很久没有享受过一...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb18.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>简约之美 | 藏在城市里的线条和平面</router-link>
                    <p>冬日，晴，无风，忌工作。 道路干净到看不见一片落叶，哦，这个城市只会在除了冬季之外任何一个季节里落叶。 包了整条街，没有花一分钱。 红色，黄色，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb19.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>世间的美好，在于山间清晨和海边日出</router-link>
                    <p>冬季，不适合看海，因为冷。风太大，吹在身上见缝就钻，无处可躲。 冬季，不适合拍海，因为冷。穿太多，背着器材不便操作，限制重重。 冬天的好处在于，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb20.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>没有马的太阳马戏团</router-link>
                    <p>因为看了金刚狼出演的电影《马戏之王》，我对马戏产生了浓厚的兴趣，于是去看了一场在深圳演出的世界级马戏表演。 太阳马戏（法语：Cirque Du ...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="最新评论" name="third">
            <div class="main_b1">
              <ul>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb12.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>书出版了，我想和你们聊聊这些</router-link>
                    <p>我并非天资聪颖，也算不上愚钝，属于中等水平，在小学初中的时候算得上是学渣中的佼佼者，除了课本之外的书我都热爱。就这样的我，现在竟然出版了一本书，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb13.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>自驾云南 | 又见丽江束河泸沽湖</router-link>
                    <p>丽江束河古镇 自驾的好处在于想去哪里就去哪里。 离开阴雨连绵的广西，进入云贵高原，在这片海拔适中的区域，天空一如既往的蓝，空气通透，富含紫外线，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb14.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>自驾广西 | 中越边境的山水风光</router-link>
                    <p>2019年的春节，我用车轮丈量了5000公里的土地，从广西到云南，再到四川，最后返回广东。 行走了风光省道广西沿边公路，再到丽江束河古镇做了短暂...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb15.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>微观之美 | 那些我们不曾注意的细节</router-link>
                    <p>有一天晚上睡梦中迷迷糊糊听到床边防潮箱里传来一阵窃窃私语，我偷偷的起身望过去。 防潮箱里放着几台相机，里面包括几台数码单反、胶片单反、黑卡，还有...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb16.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>回乡掠影 | 祝各位简友新春快乐</router-link>
                    <p>少小离家老大回，柳暗花明又一村。我对老家的形象像坏了的钟一样定格在小时候。烟花爆竹如银蛇飞舞，舞龙醒狮栩栩如生，我躲在大人身后新奇的看着。盼望着...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb17.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>你在茅庐里自比卧龙，实际上只是卧槽</router-link>
                    <p>这是一个思想实验。 假如你有一点积蓄，一年不工作至少能保证温饱不是问题。只不过觉得工作给你泰山压顶的感觉，生活让你有点喘不过气，很久没有享受过一...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb18.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>简约之美 | 藏在城市里的线条和平面</router-link>
                    <p>冬日，晴，无风，忌工作。 道路干净到看不见一片落叶，哦，这个城市只会在除了冬季之外任何一个季节里落叶。 包了整条街，没有花一分钱。 红色，黄色，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb19.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>世间的美好，在于山间清晨和海边日出</router-link>
                    <p>冬季，不适合看海，因为冷。风太大，吹在身上见缝就钻，无处可躲。 冬季，不适合拍海，因为冷。穿太多，背着器材不便操作，限制重重。 冬天的好处在于，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb20.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>没有马的太阳马戏团</router-link>
                    <p>因为看了金刚狼出演的电影《马戏之王》，我对马戏产生了浓厚的兴趣，于是去看了一场在深圳演出的世界级马戏表演。 太阳马戏（法语：Cirque Du ...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热门" name="fourth">
            <div class="main_b1">
              <ul>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb14.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>自驾广西 | 中越边境的山水风光</router-link>
                    <p>2019年的春节，我用车轮丈量了5000公里的土地，从广西到云南，再到四川，最后返回广东。 行走了风光省道广西沿边公路，再到丽江束河古镇做了短暂...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb15.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>微观之美 | 那些我们不曾注意的细节</router-link>
                    <p>有一天晚上睡梦中迷迷糊糊听到床边防潮箱里传来一阵窃窃私语，我偷偷的起身望过去。 防潮箱里放着几台相机，里面包括几台数码单反、胶片单反、黑卡，还有...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb16.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>回乡掠影 | 祝各位简友新春快乐</router-link>
                    <p>少小离家老大回，柳暗花明又一村。我对老家的形象像坏了的钟一样定格在小时候。烟花爆竹如银蛇飞舞，舞龙醒狮栩栩如生，我躲在大人身后新奇的看着。盼望着...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb17.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>你在茅庐里自比卧龙，实际上只是卧槽</router-link>
                    <p>这是一个思想实验。 假如你有一点积蓄，一年不工作至少能保证温饱不是问题。只不过觉得工作给你泰山压顶的感觉，生活让你有点喘不过气，很久没有享受过一...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb18.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>简约之美 | 藏在城市里的线条和平面</router-link>
                    <p>冬日，晴，无风，忌工作。 道路干净到看不见一片落叶，哦，这个城市只会在除了冬季之外任何一个季节里落叶。 包了整条街，没有花一分钱。 红色，黄色，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb19.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>世间的美好，在于山间清晨和海边日出</router-link>
                    <p>冬季，不适合看海，因为冷。风太大，吹在身上见缝就钻，无处可躲。 冬季，不适合拍海，因为冷。穿太多，背着器材不便操作，限制重重。 冬天的好处在于，...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="tu" to>
                    <img src="../../assets/dpd/wxb20.jpg" alt>
                  </router-link>
                  <div class="main_b1_1">
                    <router-link to>没有马的太阳马戏团</router-link>
                    <p>因为看了金刚狼出演的电影《马戏之王》，我对马戏产生了浓厚的兴趣，于是去看了一场在深圳演出的世界级马戏表演。 太阳马戏（法语：Cirque Du ...</p>
                    <div class="tub">
                      <span id="dian">
                        <i class="el-icon-s-opportunity"></i> 30.7
                      </span>
                      <router-link to>
                        <i class="el-icon-view"></i> 435
                      </router-link>
                      <router-link to>
                        <i class="el-icon-chat-square"></i> 15
                      </router-link>
                      <span>
                        <i class="el-icon-star-off"></i> 33
                      </span>
                      <span>
                        <i class="el-icon-thumb"></i> 1
                      </span>
                      <span>昨天 18:36</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-col>

    <el-col :span="7" :xs="24" :md="7" :offset="1" class="right">
      <ul class="right_top">
        <li>
          <router-link to="###">
            <img src="../../assets/dpd/wxb1.png">商业管理优秀作者
          </router-link>
        </li>
        <li>
          <router-link to="###">
            <img src="../../assets/dpd/wxb1.png">视觉达人
          </router-link>
        </li>
        <li>
          <router-link to="###">
            <img src="../../assets/dpd/wxb2.png">简书版权
          </router-link>
        </li>
        <li>
          <router-link to="###">
            <img src="../../assets/dpd/wxb3.png">简书签约作者
          </router-link>
        </li>
        <li>
          <router-link to="###">
            <img src="../../assets/dpd/wxb4.png">简书尊享会员
          </router-link>
        </li>
      </ul>

      <div class="right_c">
        <h4>个人介绍</h4>
        <p>
          简书签约作者，商业管理优秀作者，视觉优秀作者，顺丰速运集团前高管。
          <br>
          <br>已出版《认知:所谓成长就是认知升级》，当当网独家销售。
          <br>
          <br>购买链接:
          <a href="http://product.m.dangdang.com/26919013.html?t=1554119703">
            http://product.m.dangdang.com/269190
            13.html?t=1554119703
          </a>
          <br>
          <br>版权合作事宜请联系行距文化：pub@hangju-pub.com，未经允许的任何转载将被视为侵权，将追究法律责任。
          <br>
        </p>
        <div class="dd">
          <i class="el-icon-eleme"></i>
          <div class="dpd">
            <img src="../../assets/dpd/dpd.jpg">
          </div>
        </div>
      </div>

      <div class="right_b">
        <div class="right_b1">
          <router-link to="你爸爸">
            <i class="el-icon-menu"></i>
            <span>他关注的专题/文集/连载</span>
          </router-link>
          <router-link to="我是">
            <i class="el-icon-star-off"></i>
            <span>他喜欢的文章</span>
          </router-link>
        </div>
        <div class="right_b2">
          <h3>他创建的标题</h3>
          <router-link to>
            <img src="../../assets/dpd/wxb5.webp" alt>
            <span>旅行摄影</span>
          </router-link>
          <router-link to>
            <img src="../../assets/dpd/wxb6.webp">
            <span>认知提高</span>
          </router-link>
        </div>
        <div class="right_b2">
          <h3>他管理的专题</h3>
          <router-link to>
            <img src="../../assets/dpd/wxb7.webp" alt>
            <span>小鱼学摄影</span>
          </router-link>
          <router-link to>
            <img src="../../assets/dpd/wxb8.webp">
            <span>你拍我画第二季照片评奖池</span>
          </router-link>
        </div>
        <div class="right_b3">
          <h3>他的文集</h3>
          <router-link to>
            <i class="el-icon-s-order"></i>
            <span>
              提升认知能力：成为精英指南
              <strong>付费连载</strong>
            </span>
          </router-link>
          <router-link to>
            <i class="el-icon-s-order"></i>
            <span>职场通关秘籍（付费文章）</span>
          </router-link>
          <router-link to>
            <i class="el-icon-s-order"></i>
            <span>
              闲话思维模型
              <strong>连载</strong>
            </span>
          </router-link>
          <router-link to>
            <i class="el-icon-s-order"></i>
            <span>
              没有过不去的坎
              <strong>连载</strong>
            </span>
          </router-link>
          <router-link to>
            <i class="el-icon-s-order"></i>
            <span>
              风光摄影师小课堂
              <strong>付费连载</strong>
            </span>
          </router-link>
          <router-link to>
            <i class="el-icon-s-order"></i>
            <span>
              自驾中国游记及风光摄影作品
              <strong>连载</strong>
            </span>
          </router-link>
          <router-link to>
            <i class="el-icon-s-order"></i>
            <span>杂文集（免费文章）</span>
          </router-link>
          <router-link to>
            <i class="el-icon-s-order"></i>
            <span>写作二三事</span>
          </router-link>
        </div>
        <div style="padding-bottom: 20px;font-size: 13px;">
          <router-link to="" style="color: #969696; margin-right:20px;">加入黑名单</router-link>
          <router-link to="" style="color: #969696;">举报用户</router-link>
        </div>
      </div>
    </el-col>

    <!-- -----------回到顶部------------- -->

    <!-- <el-backtop target=".wxb__scroll .el-scrollbar__wrap" :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >UP</el-row>
    </el-backtop> -->
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "微软雅黑";
}
li {
  list-style: none;
}
a {
  color: #333;
  text-decoration: none;
}
.clearfix:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfix {
  z-index: 1;
}

.main {
  width: 73%;
  margin: 0 auto;
}
.main_top {
  margin-bottom: 20px;
}
.top_l {
  float: left;
  width: 80px;
  height: 80px;
  margin-left: -2px;
}
.top_l img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.top_c {
  width: 50%;
  padding: 5px 0 0 100px;
}
.xb {
  font-size: 21px;
  font-weight: 600;
}
.top_c ul {
  margin-top: 5px;
  font-size: 14px;
}
.top_c ul li {
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin: 0 7px 6px 0;
  padding: 0 7px 0 0;
  border-right: 1px solid #f0f0f0;
}
.top_c ul li a {
  color: #969696;
}
.top_c ul li a p {
  margin-bottom: -3px;
  font-size: 15px;
  color: #333;
}
.top_c ul li a i {
  margin-left: -3px;
}

.top_r {
  width: 225px;
  float: right;
}
.top_r a {
  width: 90px;
  display: inline-block;
  border: 1px solid rgba(59, 194, 29, 0.7);
  color: #42c02e;
  text-align: center;
  padding: 8px 0;
  margin: 23px 0 23px 16px;
  font-size: 15px;
  border-radius: 40px;
}
.top_r a:hover {
  background: #42c02e10;
}
.button {
  padding: 8px 0;
  margin: 23px 0 23px 16px;
  width: 100px;
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  border-radius: 40px;
  box-shadow: 0;
  display: inline-block;
  background-color: #42c02e;
}

.main_b {
}
.main_b1 {
  // margin-top: 20px;
}
.main_b1 ul {
  // margin-top: 20px;
}
.main_b1 ul li {
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
}
.tu {
  position: absolute;
  right: 0;
  width: 125px;
  height: 100px;
  display: inline-block;
}
.main_b1 ul li img {
  display: block;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}
.main_b1_1 {
  padding-right: 140px;
}
.main_b1_1 a {
  margin: -7px 0 4px;
  color: #333;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.main_b1_1 p {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;

  color: #999;
}
.tub {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.tub a {
  color: #b4b4b4;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-right: 10px;
}
.tub span {
  color: #b4b4b4;
  margin-right: 10px;
}
#dian {
  color: #ea6f5a;
}

.right_top {
  padding-bottom: 6px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}
.right_top li {
  margin-bottom: 10px;
}
.right_top li a {
  font-size: 14px;
  color: #333;
  line-height: 30px;
}
.right_top li a img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 3px;
}
.right_c {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}
.right_c h4 {
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
  font-weight: 400;
}
.right_c p {
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
}
.right_c p a {
  color: #3194d0;
}
.right_c i {
  font-size: 25px;
  color: #42c02e;
  cursor: pointer;
}
.dd:hover .dpd {
  display: block;
}
.dpd {
  display: none;
  width: 150px;
  height: 150px;
  position: absolute;
  padding: 20px;
  border: 1px solid #f7f7f7;
  border-radius: 5%;
  background: #ffffff;
}
.dpd img {
  width: 100%;
}

.right_b1 {
  padding-bottom: 6px;
  margin-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}
.right_b1 a {
  font-size: 14px;
  color: #333;
  display: block;
  margin-bottom: 10px;
}
.right_b1 a i {
  margin-right: 10px;
  font-size: 20px;
  vertical-align: middle;
}
.right_b1 a span {
  vertical-align: middle;
}
.right_b2 {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}
.right_b2 h3 {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #969696;
}
.right_b2 a {
  display: block;
  margin-bottom: 10px;
}
.right_b2 a img {
  margin-right: 5px;
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 10%;
}
.right_b2 a span {
  font-size: 14px;
  color: #333;
  display: inline-block;
  margin-top: -25px;
  vertical-align: middle;
}
.right_b3 {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}
.right_b3 h3 {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #969696;
}
.right_b3 a {
  display: block;
  margin-bottom: 10px;
}
.right_b3 a i {
  color: #969696;
  vertical-align: middle;
  margin-right: 5px;
}
.right_b3 a span {
  font-size: 14px;
  color: #333;
  display: inline-block;
  margin-top: -25px;
}
.right_b3 a span strong {
  padding: 1px 3px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 400;
  color: #969696;
  border: 1px solid #969696;
}
.el-tabs__item {
  color: #969696 !important;
}
// .el-tabs__item.is-active{
//   border-bottom:2px solid #646464 !important;
// }
</style>


