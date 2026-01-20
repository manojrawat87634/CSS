import 'dart:io';

class Node{
  String data;
  Node ? next;
  Node(this.data);
}

class LinkedList{
  Node?_head;
  void insertAtHead (String data){
    Node n = new Node(data);
    if (_head == null){
      _head = n;
      return;
    }
    n.next = _head;
    _head = n;
  }

  void insertAtEnd(String value){
    Node n = new Node(value);
    Node ? temp = _head;
    while (temp?.next != null){
      temp = temp?.next;
    }
    temp?.next = n;
  }


  void insertAtNthPosition(String data, int index){
    if (index == 1){
      insertAtHead(data);
      return;
    }
    Node n = new Node(data);
    Node ? temp = _head;
    int i = 0;
    while (temp?.next != null && i < index - 1){
      temp = temp?.next;
      i++;
    }
    // print(temp?.data);
    n.next = temp?.next;
    temp?.next = n; 
  }

  void printList(){
    Node? temp = _head;
    while (temp != null){
      stdout.write(temp.data);
      stdout.write(" -> ");
      temp = temp.next;
    }
    stdout.write("null");
  }
}
void main(){
  LinkedList l1 = new LinkedList();
  l1.insertAtHead("8");
  l1.insertAtHead("7");
  // l1.insertAtHead("6");
  l1.insertAtHead("5");
  l1.insertAtHead("4");
  l1.insertAtHead("3");
  l1.insertAtHead("2");
  l1.insertAtHead("1");
  l1.insertAtEnd("9");
  l1.insertAtNthPosition("6", 5);
  l1.printList();
}