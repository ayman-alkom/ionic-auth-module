'use strict';

angular.module('testApp').controller('PrivateCtrl', function ($scope, $http, authSetting, $timeout) {
    $timeout(function () {
        $http.get(authSetting.root + 'private').success(function () {
                pr('Private request success .......???????????????????????????????????????????????');
                pr('Private request success .......???????????????????????????????????????????????');
                pr('Private request success .......???????????????????????????????????????????????');
                pr('Private request success .......???????????????????????????????????????????????');
                pr('Private request success .......???????????????????????????????????????????????');
                pr('Private request success .......???????????????????????????????????????????????');
                pr('Private request success .......???????????????????????????????????????????????');
                pr('Private request success .......???????????????????????????????????????????????');
            }
        ).error(function () {
                er('Private request error .......');
            }
        );
    })
});
