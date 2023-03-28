$(document).ready(function(){
    $("#productId").click(function(){
      $(".productDiv").show();
      $(".selectDiv").css("display", "block")
      $(".serviceDiv").hide();
      $(".businessDiv").hide();
      $(".vendorDiv").hide();
      $(".assetDiv").hide();
      $(".changeRequest").hide();
      $(".supersededMaterials").hide();
      $(".UnsupersededMaterials").hide();
      $(".pendingRequest").hide();
      $(".pendingApprovals").hide();
    });
   
  });


  $(document).ready(function(){
    $("#serviceId").click(function(){
      $(".serviceDiv").show();
      $(".selectDiv").css("display", "block")
      $(".productDiv").hide();
      $(".businessDiv").hide();
      $(".assetDiv").hide();
      $(".supersededMaterials").hide();
      $(".UnsupersededMaterials").hide();
      $(".changeRequest").hide();
      $(".vendorDiv").hide();
      $(".pendingRequest").hide();
    });
  });

  $(document).ready(function(){
    $("#BusinessId").click(function(){
      $(".businessDiv").show();
      $(".selectDiv").css("display", "block")
      $(".businessPartner").css("display", "block")
      $(".productDiv").hide();
      $(".serviceDiv").hide();
      $(".vendorDiv").hide();
      $(".assetDiv").hide();
      $(".supersededMaterials").hide();
      $(".pendingApprovals").hide();
      $(".pendingRequest").hide();
    });
  });


  $(document).ready(function(){
    $("#vendorId").click(function(){
      $(".vendorDiv").show();
      $(".selectDiv").css("display", "block")
      $(".productDiv").hide();
      $(".serviceDiv").hide();
      $(".businessDiv").hide();
      $(".assetDiv").hide();
      $(".supersededMaterials").hide();
      $(".pendingApprovals").hide();
    });
  });


  $(document).ready(function(){
    $("#assetId").click(function(){
      $(".assetDiv").show();
      $(".selectDiv").css("display", "block")
      $(".productDiv").hide();
      $(".serviceDiv").hide();
      $(".businessDiv").hide();
      $(".vendorDiv").hide();
      $(".supersededMaterials").hide();
      $(".pendingApprovals").hide();
    });
  });




  $(document).ready(function(){
    $("#changeRequestId").click(function(){
      $(".changeRequest").show();
      $(".supersededMaterials").hide();
      $(".UnsupersededMaterials").hide();
     
    });
  });

  $(document).ready(function(){
    $("#supersededMaterialsId").click(function(){
      $(".supersededMaterials").show();
      $(".changeRequest").hide();
      $(".UnsupersededMaterials").hide();
     
    });
  });




  $(document).ready(function(){
    $("#productBack").click(function(){
      
      $(".productDiv").hide();
      $(".changeRequest").hide();
      
      $(".selectDiv").hide();
    });
  });


  $(document).ready(function(){
    $("#unsupersededMaterialsId").click(function(){
     
      $(".UnsupersededMaterials").show();

      $(".supersededMaterials").hide();
     
      $(".changeRequest").hide();
      
     
    });
  });



  // service- starts here-----

  $(document).ready(function(){
    $("#pendingRequestId").click(function(){
      $(".pendingRequest").show();
      $(".selectDiv").css("display", "block")
      $(".pendingApprovals").hide();
      
    });
  });


  $(document).ready(function(){
    $("#pendingApprovalsId").click(function(){
      $(".pendingApprovals").show();
      $(".selectDiv").css("display", "block")
      $(".pendingRequest").hide();
      
    });
  });
  

// file create function starts

function createFile() {
    $.ajax({
        type:"GET",
        url:"createFile.html",
        dataType:"html",
        success:function(data) {
            // window.location.href="/createFile.html"
            $("body").html(data);
        },
        error:function() {
            alert("Error");
        }
    })

}

function goToMain(){
    $.ajax({
        type:"GET",
        url:"index.html",
        dataType:"html",
        success:function(data) {
            // window.location.href="/createFile.html"
            $("body").html(data);
        },
        error:function() {
            alert("Error");
        }
    })
}

// file create function ends





// extend file function starts

function extendFile() {
    $.ajax({
        type:"GET",
        url:"extendFile.html",
        dataType:"html",
        success:function(data) {
            // window.location.href="/createFile.html"
            $("body").html(data);
        },
        error:function() {
            alert("Error");
        }
    })

}

function goToMain(){
    $.ajax({
        type:"GET",
        url:"index.html",
        dataType:"html",
        success:function(data) {
            // window.location.href="/createFile.html"
            $("body").html(data);
        },
        error:function() {
            alert("Error");
        }
    })
}


// extend file function ends