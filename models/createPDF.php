<?php
require('assets/fpdf/fpdf.php');

$pdf = new FPDF();
$pdf->AddPage();

$pdf->Image('assets/img/logo.png',12.5,12.5,15);//"",x,y,size

$pdf->SetFont('Arial','B',16);
$pdf->Cell(20,10,'',"TL",0,'C');//Top Left Border
$pdf->Cell(170,10,'Some Cool Ass Title',1,0,'C');

$pdf->Ln();//New Line

$pdf->SetFont('Arial','I',12);
$pdf->Cell(20,5,'',"L",0,'C');//Left Border
$pdf->Cell(170,5,'Just Some Random Words',1,0,'C');

$pdf->Ln();

$pdf->SetFont('Arial','',8);
$pdf->Cell(20,5,'',"BL",0,'C');//Bottom Left Border
$pdf->Cell(170,5,'A Bunch Of Random Words To Make The Title Look Cooler',1,0,'C');

$pdf->Ln();
$pdf->Ln();

//190 Width 10 Height 1(Border All Sides) 0(Dont Add New Line At the end) C Text Align
$pdf->Cell(190,10,'',1,0,'C');

$pdf->Ln();

$pdf->SetFont('Arial','',12);
if(isset($input1)) $pdf->Cell(95,10,$input1,1,0,'C');
if(isset($input2)) $pdf->Cell(95,10,$input2,1,0,'C');

$pdf->Output();
?>