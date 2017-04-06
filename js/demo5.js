function sayColor(sPrefix,sSuffix) {
    alert(sPrefix + this.color +','+ sSuffix);
}

var obj = new Object();
obj.color = "blue";

sayColor.call(obj, "The color is ", "a very nice color indeed.");