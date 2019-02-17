// class User{
	
// }

function createUser(){
   	var _createTable = JSON.parse(localStorage.getItem("_userTbl")) || [];
   	let tmpObj = {};
    tmpObj["userName"]= document.getElementById("userNameTxt").value;
    tmpObj["userPassword"]= document.getElementById("userPasswordTxt").value;
   	tmpObj["userCourses"]= "Not Assigned";
   	tmpObj["userCourseStatus"]= "Not Assigned";
	_createTable.push(tmpObj);
	localStorage.setItem("_userTbl", JSON.stringify(_createTable));
	console.log("User Created...");
}

function showData() {
		var _addUserBtn=document.createElement("button");
		_addUserBtn.setAttribute("value","Add User");
		_addUserBtn.setAttribute("height","20px;");
		_addUserBtn.setAttribute("width","30px;");

        var _userTable = JSON.parse(localStorage.getItem("_userTbl"));
        // console.log(_userTable["userName"]);
        for(let a in _userTable){
        		console.log(_userTable[a].userName);
        }

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        var obj = {};
        for (var i = 0; i < _userTable.length; i++) {
            for (var key in _userTable[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }	
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.setAttribute("border","2");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < _userTable.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = _userTable[i][col[j]];
            }	
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("userModal");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }	

function removeUser(){
	console.log("Remove User");
	let myarrget = JSON.parse(localStorage.getItem('_userTbl'));	
	var select=document.getElementById("userList");
	for(let k in myarrget){
		console.log(myarrget[k].userName);	
		let option=document.createElement("option");
		option.text=myarrget[k].userName;
		select.add(option);
	}
}

function removeDataBtnFun(){
	var select=document.getElementById("userList");
	var opt = select.options[select.selectedIndex].value
	console.log(opt);
	var drophistory = JSON.parse(localStorage.getItem("_userTbl")) || [];
 	let tmpObj = {};
 	drophistory.pop(opt);
    console.log(drophistory);
    localStorage.setItem("_userTbl", JSON.stringify(drophistory));
}

// function fetchData(){
// 	var _userTable={};
// 	_userTable = localStorage.getItem("_userTbl");
//     //var _myobj = { _userTable};
//     console.log(_userTable);
//     for(a in _userTable){
//     	console.log(_userTable["userName"]=);
//     }
// }
// function showTable() {
// 		console.log(myobj);
//         var empTable = document.createElement('table');
//         empTable.setAttribute('id', 'empTable');            // SET THE TABLE ID.

//         var tr = empTable.insertRow(-1);

//         for (var h = 0; h < myobj.length; h++) {
//             var th = document.createElement('th');          // TABLE HEADER.
//             tr.innerHTML = myobj;
//             //tr.appendChild(th);
//         }

//         var div = document.getElementById('userModal');
//         div.appendChild(empTable);    // ADD THE TABLE TO YOUR WEB PAGE.
//         //addRow();
//     }

//     // ADD A NEW ROW TO THE TABLE.s
//     function addRow() {

//         var empTab = document.getElementById('empTable');

//         var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
//         var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
//         tr = empTab.insertRow(rowCnt);

//         for (var c = 0; c < myobj.length; c++) {
//             var td = document.createElement('td');          // TABLE DEFINITION.
//             td = tr.insertCell(c);
//         }
//     }