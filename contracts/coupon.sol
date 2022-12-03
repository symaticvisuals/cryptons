// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

 
contract CreateCouponsAndSendNFTs {

    mapping(string => CouponItem) private idCouponItem;

    struct redeemer {
        address claimer;
        bool claimed;
        string Ihash;
    }
    mapping(string => redeemer) private redeemers;

    struct CouponItem {
        string identifier;
        address payable owner;
        uint256 pricePerCoupon;
        uint256 numOfRedeems;
    }
    
    event NewCouponItem (
        string identifier,
        address owner,
        uint256 pricePerCoupon,
        uint256 numOfRedeems
    );
    

    // {value: }

    function createCoupons ( uint256 _price, uint256 _num, string memory identifierHash) public payable {

        require(msg.value == _price *_num , "insufficient tokens");
        // _tokenIds.increment();

        // uint256 newTokenId = _tokenIds.current();

        idCouponItem[identifierHash] = CouponItem(
            identifierHash,
            payable(msg.sender),
            _price,
            _num
        );
        emit  NewCouponItem (
            identifierHash,
            payable(msg.sender),
            _price,
            _num
    );

    } 


    function getRemainingPool(string memory Ihash) public view returns (uint256) {
        return (idCouponItem[Ihash].numOfRedeems * idCouponItem[Ihash].pricePerCoupon);
    }


    function redeemCoupon (string memory Ihash) public {
        require(idCouponItem[Ihash].numOfRedeems > 0, "the coupon has reached the maximum redeems" );
        require(redeemers[Ihash].claimed == false, "user already claimed!");
        idCouponItem[Ihash].numOfRedeems = idCouponItem[Ihash].numOfRedeems - 1;
        redeemers[Ihash].claimed = true;

        // payable().call{value: amount}()
          (bool sent, bytes memory data) = payable(address(msg.sender)).call{value: idCouponItem[Ihash].pricePerCoupon}("");
        require(sent, "Failed to send Ether");
        
        
    }

    function reclaimCoupons(string memory Ihash) public returns (bool) {
        require(msg.sender == idCouponItem[Ihash].owner, "you are not authorized");
        uint256 priceOfC = idCouponItem[Ihash].pricePerCoupon;
        uint256 leftCoupons = idCouponItem[Ihash].numOfRedeems;
        uint256 totalPool = priceOfC * leftCoupons;
        (bool sent, bytes memory data) = payable(address(idCouponItem[Ihash].owner)).call{value: totalPool}("");
        return sent;
    }
    function claimCheck(string memory Ihash) public view returns(bool) {
        return redeemers[Ihash].claimed;
    }

    // variables for totalPool, num


}