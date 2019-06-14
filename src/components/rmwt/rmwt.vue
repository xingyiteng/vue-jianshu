<template>
  <div class="main">
    <el-row>
      <el-col :span="16" :xs="24" :md="16">
        <div class="l_1">
          <p>热门问题</p>
          <div class="l_1n">
            <router-link to>2019.5.12 关于发布文章后内容消失的问题的公告</router-link>
            <router-link to>为什么文章会被锁定？</router-link>
            <router-link to>如果你被封号了？</router-link>
            <router-link to>如何更换绑定的手机号，原有手机号不用了怎么办？</router-link>
            <router-link to>简书钻「减少」了怎么办？</router-link>
            <router-link to>简书钻和简书贝的常见问题</router-link>
            <router-link to>如何注销简书账号</router-link>
            <router-link to>简书账号绑定解绑相关问题汇总</router-link>
            <router-link to>iOS充值问题（余额、使用、异常问题）</router-link>
            <router-link to>简书收入结算与提现常见问题</router-link>
            <router-link to>我该如何发表一篇付费文章？</router-link>
            <router-link to>文章列表处的缩略图不显示怎么办？</router-link>
            <router-link to>关于文章投稿次数的有关说明</router-link>
            <router-link to>简书官方专题投稿指南大全</router-link>
            <router-link to>公告：简书关注和涨粉的一些说明</router-link>
            <router-link to>关于举报“抄袭类文章”的说明</router-link>
            <router-link to>文章字数统计有问题怎么办</router-link>
            <router-link to>如何在简书进行创作</router-link>
            <router-link to style="border-bottom: none;">删除的文章如何找回，有回收站吗？</router-link>
          </div>
        </div>
        <div class="l_1">
          <p>如何玩转简书</p>
          <div class="l_1n">
            <router-link to v-for="(item, key) in items" v-show="key<num">{{item}}</router-link>
            <!-- <router-link to>怎么关闭评论</router-link>
            <router-link to>如何在简书进行创作</router-link>
            <router-link to>发现页热门文章使用指南</router-link>
            <router-link to>如何让更多的人看到自己的文章</router-link>
            <router-link to>公告：关于首页投稿专题密集投稿相关问题</router-link>
            <router-link to>如何创建并玩转属于你自己的专题</router-link>
            <router-link to>公告：简书关注和涨粉的一些说明</router-link>
            <router-link to>简书诚邀您开通付费权限</router-link>
            <router-link to>参与“分享有奖计划”，赏金拿到手软！</router-link>
            <router-link to>招募 | 宝玉社群运营培训生</router-link>
            <router-link to style="border-bottom: none;">终于等到你，还好我没放弃</router-link>-->
            <span @click="showMore">{{txt}}</span>
          </div>
        </div>
        <div class="l_1">
          <p>简书账号问题</p>
          <div class="l_1n">
            <router-link to v-for="(aaa, key) in aaas" v-show="key<num2">{{aaa}}</router-link>
            <!-- <router-link to>为什么文章会被锁定？</router-link>
            <router-link to>如果你被封号了？</router-link>
            <router-link to style="border-bottom: none;">简书账号绑定解绑相关问题汇总</router-link> -->
            <span @click="showMore2">{{txt2}}</span>
          </div>
        </div>
        <div class="l_1">
          <p>身份认证</p>
          <div class="l_1n">
            <router-link to style="border-bottom: none;">简书新浪微博联合认证说明</router-link>
          </div>
        </div>
        <div class="l_1">
          <p>简书帮助中心</p>
          <div class="l_1n">
            <router-link to v-for="(bbb, key) in bbbs" v-show="key<num3">{{bbb}}</router-link>
            <!-- <router-link to>验证码控件异常问题的错误提示详情</router-link>
            <router-link to>历史版本</router-link>
            <router-link to style="border-bottom: none;">上传图片的私密性说明</router-link> -->
            <span @click="showMore3">{{txt3}}</span>
          </div>
        </div>
        <div class="l_1">
          <p>有关简书文章的一切</p>
          <div class="l_1n">
            <router-link to v-for="(ccc, key) in cccs" v-show="key<num4">{{ccc}}</router-link>
            <!-- <router-link to>添加写文章快捷方式到桌面</router-link>
            <router-link to>文章喜欢数变动说明</router-link>
            <router-link to style="border-bottom: none;">如何写一个整洁好看的标题</router-link> -->
            <span @click="showMore4">{{txt4}}</span>
          </div>
        </div>
      </el-col>

      <el-col :span="7" :xs="24" :offset="1" style="padding:0 15px">
        <div class="r_1">
          <img src="../../assets/dpd/rmwt.png">
          <div class="r_1n">
            没解决你的疑问？
            <router-link to>
              去反馈
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </div>
        </div>
        <div class="r_2">帐户冻结、文章锁定问题，请邮件联系 help@jianshu.com</div>
        <div class="r_2">程序/功能问题、bug 反馈，可添加“简书专题社群委员会委员长”微信号：Jianshu_dama，备注“Web公测”，加群第一时间获得帮助。</div>
        <div class="r_2">
          也可以
          <router-link to>
            联系我们
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "怎么关闭评论",
        "如何在简书进行创作",
        "发现页热门文章使用指南",
        "如何让更多的人看到自己的文章",
        "公告：关于首页投稿专题密集投稿相关问题",
        "简书诚邀您开通付费权限",
        "参与“分享有奖计划”，赏金拿到手软！",
        "招募 | 宝玉社群运营培训生",
        "终于等到你，还好我没放弃"
      ],
      aaas: [
        "为什么文章会被锁定？",
        "如果你被封号了？",
        "简书账号绑定解绑相关问题汇总",
        "我记得简书的昵称，忘记了登录方式怎么办",
        "如何注销简书账号",
        "如何绑定和解绑手机号/邮箱",
        "如果你发现自己帐号里的文章/钱包金额都没了",
        "无法接收短信验证码",
        "多个账号支持合并吗？",
        "绑定账号的时候提示被占用怎么办？",
        "如何更换绑定的手机号，原有手机号不用了怎么办？"
      ],
      bbbs: [
        "验证码控件异常问题的错误提示详情",
        "历史版本",
        "上传图片的私密性说明",
        "简信",
        "喜欢的文章",
        "我的动态",
        "个人主页",
        "作者推荐",
        "好文推荐",
        "专题",
        "简友圈",
        "献给写作者的 Markdown 新手指南",
        "Markdown 编辑器",
        "富文本（Rich-text）编辑器",
        "文章书写",
        "个人主页",
        "作者推荐",
        "好文推荐",
        "专题",
        "简友圈",
        "献给写作者的 Markdown 新手指南",
        "Markdown 编辑器",
        "富文本（Rich-text）编辑器",
        "文章书写"
      ],
      cccs: [
        "添加写文章快捷方式到桌面",
        "文章喜欢数变动说明",
        "如何写一个整洁好看的标题",
        "文章字数统计有问题怎么办",
        "简书文章代码高亮指南",
        "App 生成图片分享时文章内图片无法显示",
        "iOS 版本无法赞赏问题",
        "删除的文章如何找回，有回收站吗？",
        "文章发布后，遇到乱码怎么办？",
        "文章阅读量不高？来投稿简书官方专题吧！",
        "文章列表处的缩略图不显示怎么办？",
        "不想分享小程序怎么办？"
      ],
      isShow: true,
      isShow2: true,
      isShow3: true,
      isShow4: true,
      num: 3,
      txt: "展开全部∨",
      num2: 3,
      txt2: "展开全部∨",
      num2: 3,
      txt3: "展开全部∨",
      num3: 3,
      txt4: "展开全部∨",
      num4: 3,
    };
  },
  methods: {
    showMore() {
      console.log("1",   this.isShow);
      this.isShow = !this.isShow;
      console.log("2", this.isShow);
      this.num = this.isShow ? 3 : this.items.length;
      this.txt = this.isShow ? "展开全部∨" : "收起∧";
    },
    showMore2() {
      console.log("1", this.isShow2);
      this.isShow2 = !this.isShow2;
      console.log("2", this.isShow2);
      this.num2 = this.isShow2 ? 3 : this.items.length;
      this.txt2 = this.isShow2 ? "展开全部∨" : "收起∧";
    },
    showMore3() {
      console.log("1", this.isShow3);
      this.isShow3 = !this.isShow3;
      console.log("2", this.isShow3);
      this.num3 = this.isShow3 ? 3 : this.items.length;
      this.txt3 = this.isShow3 ? "展开全部∨" : "收起∧";
    },
    showMore4() {
      console.log("1", this.isShow4);
      this.isShow4 = !this.isShow4;
      console.log("2", this.isShow4);
      this.num4 = this.isShow4 ? 3 : this.items.length;
      this.txt4 = this.isShow4 ? "展开全部∨" : "收起∧";
    }
  }
};
</script>

<style scoped>
.main {
  width: 70%;
  margin: 0 auto;
  margin-top: 58px;
  padding: 30px 0;
}
.l_1 {
}
.l_1 p {
  margin-bottom: 15px;
  padding-left: 10px;
  font-size: 20px;
  line-height: 1;
  border-left: 4px solid #ea6f5a;
}
.l_1n {
  margin-bottom: 30px;
  padding: 10px 28px;
  border-radius: 6px;
  border: 1px solid #d5d5d5;
}
.l_1n a {
  display: block;
  padding: 12px 0;
  font-size: 15px;
  color: #3194d0;
  border-bottom: 1px solid #d5d5d5;
}
.l_1n a:hover {
  text-decoration: underline;
}
.l_1n span {
  display: block;
  text-align: center;
  font-size: 15px;
  color: #999;
  cursor: pointer;
  margin-top: 15px;
}

.r_1 img {
  width: 60px;
  vertical-align: middle;
}
.r_1n {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  font-size: 14px;
}
.r_1n a {
  display: block;
  margin-top: 3px;
  color: #3194d0;
}
.r_2 {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
}
.r_2 a {
  margin-top: 3px;
  color: #3194d0;
}
</style>
