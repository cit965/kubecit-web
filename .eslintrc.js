module.exports = {
  root: true,
	rules:{
		// 解决let被强转为const问题
		"prefer-const": 0,
		// 保存代码时缩进2个空格
		"indent": ['error', 2],
	}
}
