
jQuery(document).ready(function () {
  let sportType = $('#slct1');
  let equipment = $('#slct2');
  let tools = $('#slct3');
  let membership = $('#slct4');
  

  var huntingEquipment = ["0|", "0|I have my own equipment", "20|Need only ammo!",
    "70|Need to rent a rifle and ammo"];

  var fishingEquipment = ["0|", "0|I have my own equipment", "15|Need only bait!",
    "70|Need to rent a fishing pole and bait"];

  var huntingTools = ["0|", "0|I don't want tools", "50|Need more hunting tools"];
  var fishingTools = ["0|", "0|I don't want tools", "30|Need more fishing tools"];

  var huntingMembership = ["0|", "0|I am not a member", "20|I am a member!"];
  var fishingMembership = ["0|", "0|I am not a member", "15|I am a member"];

  sportType.change(function () {
    $('#slct2').find('option').remove().end();
    $('#slct3').find('option').remove().end();
    $('#slct4').find('option').remove().end();

    let equipmentData = $('#slct1 option:selected')[0].value === "Hunting" ? huntingEquipment : fishingEquipment
    let toolsData = $('#slct1 option:selected')[0].value === "Hunting" ? huntingTools : fishingTools
    let membershipData = $('#slct1 option:selected')[0].value === "Hunting" ? huntingMembership : fishingMembership
    spliting(equipmentData, equipment);
    spliting(toolsData, tools);
    spliting(membershipData, membership);


    function spliting(val, sel) {
      for (var option in val) {
        var pair = val[option].split("|");
        sel.append(new Option(pair[1], pair[0]));
      }

    }
  })
  function calc() {
    let value1 = $('#slct2').val();
    let value2 = $('#slct3').val();
    let value3 = $('#slct4').val();
   

    let sum = 0;

    if (Number(value3) > Number(value1) + Number(value2)) {
      sum = 0;
    }
    else {
      sum = (Number(value1) + Number(value2) - Number(value3)) ;
    }
    $('#sum').attr("value",sum);
  }
  $('#btn').on('click',calc);
});


