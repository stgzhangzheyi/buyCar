const videoData=[
{id:1,title:'《剑网3·侠肝义胆沈剑心》第十一集：红衣教篇下 高呼吾名阿萨辛',
img:'../../static/images/video1.webp'},
{id:2,title:'【动态漫画】没出息的阴阳师一家 第二季 第十六集——FLAY工作室【完结】',
img:'../../static/images/video2.webp'},
{id:3,title:'【金庸漫改PV】用漫画再绘一幅金庸武侠江湖！「双笙-不立传」',
img:'../../static/images/video3.webp'},
{id:4,title:'【中抓·欢脱甜萌】《原路看斜阳》第二期',
img:'../../static/images/video4.webp'},
{id:5,title:'霹雳魔封片头曲【万魔皆封】',
img:'../../static/images/video5.webp'},
{id:6,title:'【DNF】动画第二季日语预告！西岚：艾丽丝，等着我',
img:'../../static/images/video6.webp'},
{id:7,title:'斩兽之刃 01',img:'../../static/images/video7.webp'},
{id:8,title:'无敌极光侠 英文版：11（下） 疯狂电视机',
img:'../../static/images/video8.webp'}
]

export default{
	getVideoList(){
		return new Promise(resolve=>{
			setTimeout(()=>{
				resolve(videoData)
			},300)
		})
	}
}