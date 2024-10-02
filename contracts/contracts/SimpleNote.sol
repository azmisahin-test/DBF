// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleNote {
    string private note; // Sadece bir not saklayacak
    address public owner; // Notun sahibi

    event NoteUpdated(string note); // Not güncellendiğinde bir olay

    constructor() {
        owner = msg.sender; // Sözleşmeyi oluşturan kişi notun sahibi olur
    }

    // Notu güncelle
    function updateNote(string memory _note) public {
        require(msg.sender == owner, "Only the owner can update the note"); // Sadece sahibi güncelleyebilir
        note = _note;
        emit NoteUpdated(note); // Not güncellendiğinde olayı yay
    }

    // Notu görüntüle
    function getNote() public view returns (string memory) {
        return note; // Notu döndür
    }
}
