define(["ember"], function(Ember){

Ember.TEMPLATES["test/fixtures/text"] = Ember.HTMLBars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("Basic template that does nothing.");
  },"useData":true});

Ember.TEMPLATES["test/fixtures/simple"] = Ember.HTMLBars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<p>Hello, my name is ");
  stack1 = helpers._triageMustache.call(depth0, "name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(".</p>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["test/fixtures/grandparent/parent/child"] = Ember.HTMLBars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("Should be nested.");
  },"useData":true});

});