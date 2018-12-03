<?php
$c = @file_get_contents('counter.txt');
$c = (empty($c) ? 0 : $c) + 1;
@file_put_contents('counter.txt', $c);
echo $c;
